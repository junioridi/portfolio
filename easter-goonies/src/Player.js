import React, { useState, useEffect } from "react";
import susto1 from "./audio/susto1.wav";
import susto2 from "./audio/susto2.wav";
import susto3 from "./audio/susto3.wav";
import susto4 from "./audio/susto4.wav";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.play();
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {

    const [playing, toggle] = useAudio(url);    
  
    return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;
