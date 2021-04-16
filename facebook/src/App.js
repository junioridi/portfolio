import './App.css';
import Header from "./Header.js";
import SideBar from "./Sidebar.js";
import Feed from "./Feed.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider.js";

function App() {

    const [ {user}, dispatch ] = useStateValue();

    return (
     //BEM naming convention
        <div className="app">
        {!user ? ( <Login /> ) 
            :
            (
            <>
                <Header />    
                <div className="app-body">
                    <SideBar />
                    <Feed />
                    {/* Widgets */}
                </div>
            </>
            )
        }

        </div>
    );
}

export default App;
