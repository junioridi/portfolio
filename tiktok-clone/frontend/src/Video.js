import React from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";
import { useRef, useState } from "react";

export default function Video({url, channel, song, message, shares, likes, messages}) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
        }
        else{
            videoRef.current.play();
        }
        setPlaying(!playing);
    }


    return(
        <div className="video">
        <video 
        onClick={handleVideoPress}
        className="video__player" 
        ref={videoRef}
        src={url}>
        </video>
        <VideoFooter channel={channel} song={song} />
        <VideoSidebar message={message} shares={shares} likes={likes} messages={messages}/>
        </div>        
    );
}
