import Palette from "../global/Palette.js";
import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View` 
    width: 100%;
    height: 40px;
    background-color: ${Palette.color2};
    flex-direction: row;
    border-radius: 10px;
    padding-left: 15px;
    align-items: center;
    margin-top: 10px;
    border: 1px solid ${Palette.color3};
`; 

const Input = styled.TextInput`
    flex:1;
    font-size: 16px;
    color: ${Palette.color3};
    margin-left: 10px;
    border:0;
`;


const imgStyle = {
    opacity:0.3
};

export default ( { placeholder, value, onChangeText, password, warning }) => {
    return ( 
        <InputArea style={(warning?{borderColor:"#FF0000"}:{})} > 
        <Input placeholder={ placeholder } placeholderTextColor={Palette.font}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
        />
        </InputArea>
    )
};
