import React from 'react';
import styled from 'styled-components/native';

//import StarFull from '../../assets/star.svgx';
//import StarHalf from '../../assets/star_half.svgx';
//import StarEmpty from '../../assets/star_empty.svgx';

import StarFull from '../icons/Star.js';
import StarHalf from '../icons/StarHalf.js';
import StarEmpty from '../icons/StarEmpty.js';

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
                {i === 0 && <StarEmpty width="18" height="18" fill="red" />}
                    {i === 1 && <StarHalf width="18" height="18" fill="red" />}
                    {i === 2 && <StarFull width="18" height="18"  fill="red" />}
                </StarView>
            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}
