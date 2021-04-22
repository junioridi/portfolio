import React from 'react';
import styled from 'styled-components/native';
import Palette from '../../global/Palette.js';

export const Container = styled.SafeAreaView`
    flex:1;
    background: ${Palette.color1}
`;

export const BackImage = styled.Image`
    width:100%;
    height:100%;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding-right: 0px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0px 20px;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: ${Palette.font};
`;

 export const InputArea = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px 20px 0px 20px;
 `;

 export const Warning = styled.Text`
     color: ${Palette.color5} 
     font-size:14px;
     margin-left:20px;
`;
 
