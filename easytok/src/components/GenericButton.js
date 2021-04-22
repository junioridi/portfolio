import React from 'react';
import styled from 'styled-components/native';
import Palette from '../global/Palette.js';

const Button = styled.TouchableOpacity`
    height:40px;
    width:100%;
    background-color: ${Palette.color5};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top:10px;
`;

const ButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
`;


export default ({ handleClick, text}) => (
    <Button onPress={handleClick}>
    <ButtonText >{text}</ButtonText>
    </Button >
)
