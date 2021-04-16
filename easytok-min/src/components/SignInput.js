import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View` 
    width: 100%;
    height: 40px;
    background-color: #83D6E3;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 10px;
`; 

const Input = styled.TextInput`
    flex:1;
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
    border:0;
    outlineWidth: 0;
`;


const imgStyle = {
    opacity:0.3
};

export default ( { IconSvg, placeholder, value, onChangeText, password }) => {
    return ( 
        <InputArea> 
            <img src={IconSvg} width="24" height="24" style={imgStyle} />
        <Input placeholder={ placeholder } placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
        />
        </InputArea>
    )
};
