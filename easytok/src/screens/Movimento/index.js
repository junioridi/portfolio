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

import ActionItem from '../../components/ActionItem';

import SearchIcon from '../../icons/Search.js';
import MyLocationIcon from '../../icons/Location.js';

export default () => {
    const navigation = useNavigation();

    const [list, setList] = useState([]);


    const goto = (tipo) => {
        navigation.navigate("MovimentaItem", { tipo:tipo} );
    }

    return (
        
        <Container>    
        <BackImage style={[StyleSheet.absoluteFill, {position:"absolute",  bottom:0, zIndex:-1 } ]} source={Back}/>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Movimento de Materiais</HeaderTitle>
                </HeaderArea>
                <ActionItem value="Entrada" onPress={()=>goto("Entrada")}/>
                <ActionItem value="Saída" onPress={()=>goto("Saída")}/>
                <ActionItem value="Inventário" onPress={()=>goto("Inventário")} />
        </Container>
    );
}




//<ImageBackground source={Back} style={{   top: 0, resizeMode: 'contain'   }}  resizeMode="contain" resizeMethod="resize" >
