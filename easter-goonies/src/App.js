
import logo from "./logo.png";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "./Feed.js";
import MainMenu from "./MainMenu.js";
import Roletrando from "./Roletrando.js";
import PortaSecreta from "./PortaSecreta.js";
import Susto from "./Susto.js";
import Calc from "./Calc.js";
import Pista from "./Pista.js";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <BrowserRouter>
            <Switch>
                <Route path="/porta">
                    <PortaSecreta selected="3"/>
                </Route>
                <Route path="/roletrando">
                    <Roletrando frase="FRIGIDEIRA"/>
                </Route>
                <Route path="/soma">
                    <Feed />
                </Route>
                <Route path="/telegram">
                    <Feed />
                </Route>
                <Route path="/susto">
                    <Susto />
                </Route>
                <Route path="/susto2">
                    <Susto number="2"/>
                </Route>
                <Route path="/susto3">
                    <Susto number="3"/>
                </Route>
                <Route path="/susto4">
                    <Susto number="4"/>
                </Route>
                <Route path="/pista1">
                    <Pista number="1"/>
                </Route>
                <Route path="/pista2">
                    <Pista number="2"/>
                </Route>
                <Route path="/pista3">
                    <Pista number="3"/>
                </Route>

                <Route path="/calc">
                    <Calc operacao="+" numero1="856" numero2="168" porta="3"/>
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
