
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Container, LoadingIcon, LocalImage } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../icons/Logo.js';

export default () => {                    
    
    const navigation = useNavigation();

    useEffect( () => {
        const checkToken = async () => {           
           const token = await AsyncStorage.getItem('token');
           if( token ) {
               navigation.navigate("MainTab");
   	       //navigation.navigate("SignIn");
           } else {
               navigation.navigate("SignIn");
           }

        }
        checkToken();

    }, [] );

    return (
        <Container>
	<Logo width="100%" height={160} />
        <LoadingIcon size="large" color="#ffffff" />
        </Container>
    );

}

