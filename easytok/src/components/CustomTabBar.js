import React, { useContext } from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../icons/Home.js';
import SearchIcon from '../icons/Search.js';
import TodayIcon from '../icons/Today.js';
import FavoriteIcon from '../icons/Favorite.js';
import AccountIcon from '../icons/Account.js';

import { UserContext } from '../contexts/UserContext'
import Palette from '../global/Palette.js';


const TabArea = styled.View`
    height:60px;
    background-color: ${Palette.color1};
    flex-direction: row;
    box-shadow: 0px -2px 2px rgba(0,0,0,0.25);
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
    border: 2px solid ${Palette.color1};
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
             <HomeIcon width={24} height={24} fill={Palette.font}/>
        </TabItem>
        <TabItem onPress={()=>goto('Search')}>
            <SearchIcon width={24} height={24}  fill={Palette.font}/>
        </TabItem >
        <TabItemCenter onPress={()=>goto('Appointments')}>
            <TodayIcon width={32} height={32}  fill={Palette.color1}/>
        </TabItemCenter>
        <TabItem onPress={()=>goto('Favorites')}>
            <FavoriteIcon width={24} height={24}  fill={Palette.font} />
        </TabItem>
        <TabItem onPress={()=>goto('Profile')}>  
            { user.avatar  != "" ?
                <AvatarIcon source={{ uri: user.avatar }} />
                :
                <AccountIcon width={24} height={24}  fill={Palette.font}/>
            }
        </TabItem>
    </TabArea>

    );
};
