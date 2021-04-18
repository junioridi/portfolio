import React from 'react';
import { Container, Text } from './styles'; 

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default () => {

    const navigation = useNavigation();
    const handledClick = async () => {
        alert("hummm");
        await AsyncStorage.setItem('token', '');
        navigation.reset( {
            routes: [{ name:'Preload' }]
        });
    };
    
    return (
        <Container>
            <Text onPress={handledClick}>Profile</Text>
        </Container>
    );
}
