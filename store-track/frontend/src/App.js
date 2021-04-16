import React from 'react';
import logo from "./logo.png";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "./Feed.js";
import MaterialList from "./MaterialList.js";
import MainMenu from "./MainMenu.js";
import Material from "./Material.js";

import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    box: {padding:50},
    text: {fontWeight: 'bold', color: "#ffffff"},
 
});

function App() {
  
    
    return (
    <div className="App">      
      <header className="App-header">
        <img src={logo} />
        <h1>StoreTrack</h1>
          <View style={styles.box}>
            <Text style={styles.text}>Hellow, world!</Text>
          </View>
      </header>
      <div className="App-body">
        <BrowserRouter>
            <Switch>
                <Route path="/material-list">
                    <MaterialList />
                </Route>
                <Route path="/material/:id">
                    <Material />
                </Route>
                <Route path="/feed">
                    <Feed />
                </Route>
                <Route>
                    <MainMenu />
                </Route>
            </Switch>
        </BrowserRouter>      
      </div>
    </div>
  );
}

export default App;
