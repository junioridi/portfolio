import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles'; 

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {

    const navigation = useNavigation();
    const handledClick = async () => {
        await AsyncStorage.setItem('token', '');
        navigation.reset( {
            routes: [{ name:'Preload' }]
        });
    };
    
    return (
        <Container>
            <Text onClick={handledClick}>Profile</Text>
        </Container>
    );
}
