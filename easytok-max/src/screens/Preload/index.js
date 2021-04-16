
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage'; 
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo.svg';

export default () => {                    
    
    const navigation = useNavigation();

    useEffect( () => {
        const checkToken = async () => {           
           const token = await AsyncStorage.getItem('token');
           if( token ) {
               navigation.navigate("MainTab");
           } else {
               navigation.navigate("SignIn");
           }

        }
        checkToken();

    }, [] );

    return (
        <Container>
        <img src={logo} width="100%" height="160"  />
        <LoadingIcon size="large" color="#ffffff" />
        </Container>
    );

}

