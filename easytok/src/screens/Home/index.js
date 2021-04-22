import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { request, PERMISSIONS } from 'react-native-permissions';
//import Geolocation from '@react-native-community/geolocation';
import Back from '../../../assets/back-large.png';
import StyleSheet from 'styled-components/native';


import Api from '../../Api';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    LoadingIcon,
    ListArea, 
    BackImage
    
} from './styles';

import MaterialItem from '../../components/MaterialItem';

import SearchIcon from '../../icons/Search.js';
import MyLocationIcon from '../../icons/Location.js';

export default () => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);
	let result = 'granted';
        /*let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getBarbers();
            });

        }*/
    }

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;
        if(coords) {
            lat = coords.latitude;
            lng = coords.longitude;
        }

        let res = await Api.getBarbers(lat, lng, locationText);
        if(res.error == '') {
            if(res.loc) {
                setLocationText(res.loc);
            }
            setList(res.data);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    useEffect(()=>{
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getBarbers();
    }

    return (
        
        <Container>    
        <BackImage style={[StyleSheet.absoluteFill, {position:"absolute",  bottom:0, zIndex:-1 } ]} source={Back}/>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Lista de materiais cadastrados</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26"  fill="white"/>
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="white" />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }
                
                <ListArea>
                    {list.map((item, k)=>(
                        <MaterialItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    );
}




//<ImageBackground source={Back} style={{   top: 0, resizeMode: 'contain'   }}  resizeMode="contain" resizeMethod="resize" >
