import React, { useContext } from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../../assets/home.svgx';
import SearchIcon from '../../assets/search.svgx';
import TodayIcon from '../../assets/today.svgx';
import FavoriteIcon from '../../assets/favorite.svgx';
import AccountIcon from '../../assets/account.svgx';

import { UserContext } from '../contexts/UserContext'

const TabArea = styled.View`
    height:60px;
    background-color: #4EADBE;
    flex-direction: row;
`;


const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items:center;
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;


const TabItemCenter = styled.TouchableOpacity`
    width:70px;
    height:70px;
    margin-top:-15px;
    justify-content: center;
    align-items:center;
    background-color: #fff;
    border-radius: 35px;
    border: 2px solid #4EADBE;
`;



export default ({state, navigation}) => {


    const {state:user} = useContext(UserContext);
    console.log(user.avatar);

    const goto = (screenName) => {
        navigation.navigate(screenName)
    }
        
    return (
        

    <TabArea>
        <TabItem onPress={()=>goto('Home')}>
             <HomeIcon width={24} height={24} fill="#fff"/>
        </TabItem>
        <TabItem onPress={()=>goto('Search')}>
            <SearchIcon width={24} height={24}  fill="#fff"/>
        </TabItem >
        <TabItemCenter onPress={()=>goto('Appointments')}>
            <TodayIcon width={32} height={32}  fill="#4EADBE"/>
        </TabItemCenter>
        <TabItem onPress={()=>goto('Favorites')}>
            <FavoriteIcon width={24} height={24}  fill="#fff" />
        </TabItem>
        <TabItem onPress={()=>goto('Profile')}>  
            { user.avatar  != "" ?
                <AvatarIcon source={{ uri: user.avatar }} />
                :
                <AccountIcon width={24} height={24}  fill="#fff"/>
            }
        </TabItem>
    </TabArea>

    );
};
