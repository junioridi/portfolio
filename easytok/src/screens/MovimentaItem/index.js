import React, { useState } from 'react';
import { Text, Input, Form } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, InputArea, Warning, BackImage} from './styles';
import { Platform, RefreshControl } from 'react-native';
import GenericInput from '../../components/GenericInput';
import GenericButton from '../../components/GenericButton';
import WebDatePicker from '../../components/WebDatePicker';
import Back from '../../../assets/back-large.png';
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';

import StyleSheet from 'styled-components/native';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
});


export default ({route, navigation}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const {tipo} = route.params;
    const [data, setData] = useState( {nome:"", grupo:"", unidade: "UN", saldo: "0", foto: "" } );
    const [validate, setValidate] = useState({nome:null, grupo:null, unidade:null, saldo:null, foto:null});
    const handleClick = () => {
        alert( JSON.stringify(data) );
    };
    const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


    return (
        <Container>
        <BackImage style={[StyleSheet.absoluteFill, {position:"absolute",  bottom:0, zIndex:-1 } ]} source={Back}/>
        <Scroller >        
        
        <HeaderArea>        
        <HeaderTitle numberOfLines={2} onPress={showDatepicker}>{tipo} de Materiais</HeaderTitle>        
        </HeaderArea>
        
        <InputArea > 

        <GenericInput placeholder="Data" value={data.foto}  onChangeText={(text) => setDataValidation({ ...data, foto: text})} />
      {show && (
          <WebDatePicker />
      )}
      {false && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        
        <GenericInput placeholder="Fornecedor" value={data.saldo} onChangeText={(text) => setDataValidation({ ...data, saldo: text})} />
        <GenericInput placeholder="Nota Fiscal" value={data.unidade} onChangeText={(text) => setDataValidation({ ...data, unidade: text})} />
        <GenericInput placeholder="Material" value={data.nome} onChangeText={(text) => setDataValidation({ ...data, nome: text} ) } warning={validate.nome}  />
        {validate.nome && <Warning>{validate.nome}</Warning>}
        <GenericInput placeholder="Quantidade" value={data.grupo} onChangeText={(text) => setDataValidation({ ...data, grupo: text}) } warning={validate.grupo}  />
        {validate.grupo && <Warning>{validate.grupo}</Warning>}
        <GenericButton handleClick={handleClick} text="Salvar" />
        </InputArea >
        
        </Scroller >  
        </Container>
    );
}
