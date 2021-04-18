/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/




import React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
            
import MainStack from './src/stacks/MainStack.js';
import UserContextProvider from './src/contexts/UserContext';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import Palette from './src/global/Palette.js';

const Container = styled.SafeAreaView`
    overflow: hidden;
    margin: 0;
    padding: 0;
`;


import {createGlobalStyle} from 'styled-components';

var GlobalStyle = null;
if( Platform.OS == 'web' )
{
    
  GlobalStyle = createGlobalStyle`
    body {
         overflow:hidden;
     }

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${Palette.color5};
      border-radius: 10px;
    }    
    textarea:focus, input:focus{
        outline: none;
    }
  
  `;
}

export default function App() {
    return (
        <UserContextProvider >
            <NavigationContainer>
                { GlobalStyle && <GlobalStyle />  }
               <MainStack />
            </NavigationContainer>
        </UserContextProvider >
  );
}

