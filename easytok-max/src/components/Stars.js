import React from 'react';
import styled from 'styled-components/native';

import StarFull from '../../assets/star.svg';
import StarHalf from '../../assets/star_half.svg';
import StarEmpty from '../../assets/star_empty.svg';

const StarArea = styled.View`
    flex-direction: row;
`;
const StarView = styled.View``;

const StarText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    color: #737373;
`;


const goldStyle = {
	filter: `invert(56%) sepia(95%) saturate(1790%) hue-rotate(0deg) brightness(102%) contrast(105%)`
};


export default ({ stars, showNumber }) => {
    let s = [0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars - floor;

    for(var i=0;i<floor;i++) {
        s[i] = 2;
    }
    if(left > 0) {
        s[i] = 1;
    }

    return (
        <StarArea>
            {s.map((i, k)=>(
                <StarView key={k}>
                    {i === 0 && <img src={StarEmpty} width="18" height="18" style={goldStyle} />}
                    {i === 1 && <img src={StarHalf} width="18" height="18" style={goldStyle} />}
                    {i === 2 && <img src={StarFull} width="18" height="18" style={goldStyle} />}
                </StarView>
            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}
