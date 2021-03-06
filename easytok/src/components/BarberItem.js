import React from 'react';
import styled from 'styled-components/native';

import Stars from '../components/Stars';
import Palette from '../global/Palette.js';


const AreaOld = styled.TouchableOpacity`
    background-color: ${Palette.color2};
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
    border: 1px solid ${Palette.color2};
`;

const Area = styled.TouchableOpacity`
    background-color: ${Palette.color1};
    padding: 20px;
    flex-direction: row;
    borderBottomWidth:1px;
    borderBottomColor: ${Palette.color3};
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 100px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${Palette.font}
`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid ${Palette.font};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: ${Palette.font};
`;


export default ({data}) => {
    return (
        <Area>
            <Avatar source={{uri: data.avatar}} />
            <InfoArea>
                <UserName>{data.name}</UserName>

                <Stars stars={data.stars} showNumber={true} />

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}
