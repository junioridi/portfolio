import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/dashboard';
import Preferences from './components/Preferences/preferences';
import Login from './components/Login/login';
import useToken from './useToken';





function App() {
    
    const { token, setToken } = useToken(); 
    
    //function setToken(user) {
    //    alert( user.username );
    //}
    
    if(!token)
    {
        return( <Login setToken={setToken}/> );
    }

    
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
      <BrowserRouter>
        <Switch>
            <Route path="/Dashboard">
                <Dashboard />
            </Route>
            <Route path="/Preferences">
                <Preferences />
            </Route>
        </Switch>
      </BrowserRouter>      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
