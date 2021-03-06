import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

export default function VideoFooter({channel, message, song}) {
    return(
        <div className="video-footer">
            <div className="video-footer__text">
            <h3>{channel}</h3>
                <p>Caramba {message} {song}</p>
            </div>     
            <div className="video-footer__ticker">
                <MusicNoteIcon className="video-footer__icon"/>
                <Ticker mode="smooth"> 
                    {({index}) => (
                        <p>{song}</p>
                    )}
               </Ticker>
                <img alt="" className="video-footer__record" src="https://static.thenounproject.com/png/934821-200.png" />
            </div> 
        </div>
    );
}
