import Palette from "../../global/Palette.js";
import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: ${Palette.color1};
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;


