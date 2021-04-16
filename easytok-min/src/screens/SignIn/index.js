

import React, { useEffect, useState, useContext } from 'react';
import { Text } from 'react-native';
import { Container, 
         LoadingIcon, 
         InputArea,
         CustomButton,
         CustomButtonText, 
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold
} from './styles';
import AsyncStorage from '@react-native-community/async-storage'; 
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo.svg';
import SignInput from '../../components/SignInput';

import EmailIcon from '../../../assets/email.svg';
import LockIcon from '../../../assets/lock.svg';
import Api from '../../Api.js';

import { UserContext } from '../../contexts/UserContext'

export default () => {    

    const {dispatch: UserDispatch} = useContext(UserContext);

    const navigation = useNavigation();
    
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');


    const handleSignClick = async () => {
        if(emailField != "" && passwordField != "" )
        {
            let json = await Api.signIn(emailField, passwordField);
            if(json.token)
            {
                await AsyncStorage.setItem('token', json.token);
                UserDispatch( {  
                     type:'setAvatar',
                     payload: { 
                        avatar: json.data.avatar
                     }
                });

                navigation.reset( {
                    routes: [{ name: 'MainTab' }]
                });      
            }
            else
            {
                alert( "Erro: " + json.error );
            }

        }
        else
        {
              alert("Preencha os campos!"); 
        }

    
    }

    const handleMessageButtonClick = () => {
        navigation.reset( {
            routes: [{name: 'SignUp'}]
        });
    }



    return (
        <Container>
        <img src={logo} width="100%" height="160"  />
        <InputArea>

           <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail"
                value={emailField}
                onChangeText={t=>setEmailField(t)}
            />
            <SignInput IconSvg={LockIcon} placeholder="Digite sua senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
            />
            <CustomButton onPress={handleSignClick}>
                <CustomButtonText>LOGIN</CustomButtonText>
            </CustomButton>

        </InputArea>
        
        <SignMessageButton onPress={handleMessageButtonClick}>
            <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
            <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>

        </Container>
    );

}

