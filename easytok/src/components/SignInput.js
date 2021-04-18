import Palette from "../global/Palette.js";
import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View` 
    width: 100%;
    height: 40px;
    background-color: ${Palette.color1};
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #ffffff;
`; 

const Input = styled.TextInput`
    flex:1;
    font-size: 16px;
    color: #ffffff;
    margin-left: 10px;
    border:0;
`;


const imgStyle = {
    opacity:0.3
};

export default ( { IconSvg, placeholder, value, onChangeText, password }) => {
    return ( 
        <InputArea> 
            <IconSvg width="24" height="24" fill={Palette.font}/>
        <Input placeholder={ placeholder } placeholderTextColor={Palette.font}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
        />
        </InputArea>
    )
};
