import React, { useContext } from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';

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

const imgStyleSelected= {
    filter: `invert(1)`,
    opacity: 1
}

const imgStyleFade = {
    filter: `invert(1)`,
    opacity: 0.3
}   

const imgCenter = {
    filter: `invert(42%) sepia(99%) saturate(302%) hue-rotate(141deg) brightness(93%) contrast(91%)`,
    opacity: 0.8
}

const imgCenterFade = {
    filter: `invert(58%) sepia(71%) saturate(332%) hue-rotate(141deg) brightness(93%) contrast(84%)`,
    opacity: 0.8
}

export default ({state, navigation}) => {


    const {state:user} = useContext(UserContext);
    console.log(user.avatar);

    const goto = (screenName) => {
        navigation.navigate(screenName)
    }
        
    return (
        

    <TabArea>
        <TabItem onPress={()=>goto('Home')}>
        <img src={HomeIcon} width={24} height={24} style={(state.index==0?imgStyleSelected:imgStyleFade)}/>
        </TabItem>
        <TabItem onPress={()=>goto('Search')}>
            <img src={SearchIcon} width={24} height={24} style={(state.index==1?imgStyleSelected:imgStyleFade)}/>
        </TabItem >
        <TabItemCenter onPress={()=>goto('Appointments')}>
            <img src={TodayIcon} width={32} height={32} style={(state.index==2?imgCenter:imgCenterFade)}/>
        </TabItemCenter>
        <TabItem onPress={()=>goto('Favorites')}>
            <img src={FavoriteIcon} width={24} height={24} style={(state.index==3?imgStyleSelected:imgStyleFade)}/>
        </TabItem>
        <TabItem onPress={()=>goto('Profile')}>  
            { user.avatar  != "" ?
                <AvatarIcon source={{ uri: user.avatar }} />
                :
                <img src={AccountIcon} width={24} height={24} style={(state.index==4?imgStyleSelected:imgStyleFade)}/>
            }
        </TabItem>
    </TabArea>

    );
}
