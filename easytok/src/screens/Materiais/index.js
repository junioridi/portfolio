import React, { useState } from 'react';
import { Text, Input, Form } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, InputArea, Warning, BackImage} from './styles';
import { Platform, RefreshControl } from 'react-native';
import GenericInput from '../../components/GenericInput';
import GenericButton from '../../components/GenericButton';
import Back from '../../../assets/back-large.png';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
});


export default () => {

    const [data, setData] = useState( {nome:"", grupo:"", unidade: "UN", saldo: "0", foto: "" } );
    const [validate, setValidate] = useState({nome:null, grupo:null, unidade:null, saldo:null, foto:null});

    const handleClick = () => {
        alert( JSON.stringify(data) );
    };

    const setDataValidation = ( input ) => {      
        alert(JSON.stringify(input));
        
        var messages = { ...validate,
            nome: ( input.nome == ""?"*Preencha o nome do material":null ),
            grupo: ( input.grupo == ""? "*Preencha o grupo do material":null ),
        }

        setValidate( messages );
        setData(input);
    }


    return (
        <Container>
        <BackImage style={[StyleSheet.absoluteFill, {position:"absolute",  bottom:0, zIndex:-1 } ]} source={Back}/>
        <Scroller >        
        
        <HeaderArea>        
        <HeaderTitle numberOfLines={2}>Cadastre seu material aqui</HeaderTitle>        
        </HeaderArea>
        
        <InputArea > 
        <GenericInput placeholder="Nome" value={data.nome} onChangeText={(text) => setDataValidation({ ...data, nome: text} ) } warning={validate.nome}  />
        {validate.nome && <Warning>{validate.nome}</Warning>}
        <GenericInput placeholder="Grupo" value={data.grupo} onChangeText={(text) => setDataValidation({ ...data, grupo: text}) } warning={validate.grupo}  />
        {validate.grupo && <Warning>{validate.grupo}</Warning>}
        <GenericInput placeholder="Unidade" value={data.unidade} onChangeText={(text) => setDataValidation({ ...data, unidade: text})} />
        <GenericInput placeholder="Saldo" value={data.saldo} onChangeText={(text) => setDataValidation({ ...data, saldo: text})} />
        <GenericInput placeholder="Foto" value={data.foto} onChangeText={(text) => setDataValidation({ ...data, foto: text})} />
        <GenericButton handleClick={handleClick} text="Salvar" />
        </InputArea >
        
        </Scroller >  
        </Container>
    );
}
