import React from 'react';
import styled from 'styled-components/native';

import Stars from '../components/Stars';
import Palette from '../global/Palette.js';

const Area = styled.TouchableOpacity`
    background-color: ${Palette.color1};
    padding: 10px;
    margin: 0px 20px;
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
    margin: 20px;
    justify-content: space-between;
`;

const ItemValue = styled.Text`
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


export default ({value, onPress}) => {
    return (
        <Area onPress={onPress}>
            <Avatar  />
            <InfoArea>
                <ItemValue>{value}</ItemValue>

                <Stars stars={5} showNumber={true} />

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Detalhes</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}
