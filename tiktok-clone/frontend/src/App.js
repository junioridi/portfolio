import './App.css';
import Video from "./Video.js";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import React, {useState, useEffect} from "react";

function App() {

    const [urlData, setUrlData] = useState([]);
    const getData = async (url = "https://192.168.1.90:9000/v2/posts" ) =>
    {
        const response = await fetch(url);
        const data = await response.json();
        setUrlData(data);
    }

    useEffect( () => {   
        getData();
    }, [] 
    );
    
    return (
      <div className="app">
        <div className="app__videos">
        { urlData.map( (data, index) =>
            <Video channel={data.channel} song={data.song} message={data.description} url={data.url} shares={data.shares} messages={0} likes={data.likes}/>
          )
        }      
      </div>
      </div>                                                                                                                                                                                                                                            
  );
}

export default App;
