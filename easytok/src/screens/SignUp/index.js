
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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/logo.svgx';
import SignInput from '../../components/SignInput';

import EmailIcon from '../../../assets/email.svgx';
import LockIcon from '../../../assets/lock.svgx';
import PersonIcon from '../../../assets/person.svgx';
import Api from '../../Api.js';

import { UserContext } from '../../contexts/UserContext';

export default () => {    

    const {dispatch: UserDispatch} = useContext(UserContext);
    const navigation = useNavigation();
    
    const [passwordField, setPasswordField] = useState('');
    const [passwordRepeatField, setPasswordRepeatField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [nameField, setNameField] = useState('');


    const handleSignClick = async () => {
        if(nameField != "" && emailField != "" && passwordField != "" )
        {

            if( passwordField != passwordRepeatField ){
                alert( 'Senhas não conferem!' );
            }
            else
            {
                let res = await Api.signUp(nameField, emailField, passwordField);
                if(res.token)
                {
                    await AsyncStorage.setItem('token', res.token);
                    UserDispatch( { action: 'setAvatar',
                        payload: { 
                            avatar: res.data.avatar
                        }
                    });
                
                    navigation.reset( {
                        routes: [{ name: 'MainTab' }]
                    }); 
                }
                else
                {
                    alert("Erro: " + res.error ); 
                }
            }

        }
        else
        {
            alert("Preencha os campos!"); 
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset( {
            routes: [{name: 'SignIn'}]
        });
    }



    return (
        <Container>
	<Logo width="100%" height={160} />
        <InputArea>
           <SignInput IconSvg={PersonIcon} placeholder="Digite seu nome"
                value={nameField}
                onChangeText={t=>setNameField(t)}
            />
           <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail"
                value={emailField}
                onChangeText={t=>setEmailField(t)}
            />                             
            <SignInput IconSvg={LockIcon} placeholder="Digite sua senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
            />
            <SignInput IconSvg={LockIcon} placeholder="Redigite sua senha"
                value={passwordRepeatField}
                onChangeText={t=>setPasswordRepeatField(t)}
                password={true}
            />
            <CustomButton onPress={handleSignClick}>
                <CustomButtonText>CADASTRAR</CustomButtonText>
            </CustomButton>

        </InputArea>
        
        <SignMessageButton onPress={handleMessageButtonClick}>
            <SignMessageButtonText>Já possui possui uma conta?</SignMessageButtonText>
            <SignMessageButtonTextBold>Faça o Login</SignMessageButtonTextBold>
        </SignMessageButton>

        </Container>
    );

}

