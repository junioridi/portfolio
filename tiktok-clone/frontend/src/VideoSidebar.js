import React, {useState} from "react";
import "./VideoSidebar.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';


export default function VideoSidebar({likes, shares, messages}) {
    
    const [liked, setLiked] = useState(false);
    
        
    return(
        <div className="video-sidebar">
        <div className="video-sidebar__button">
        
        {( liked ?
            <FavoriteIcon fontSize="large" className="video-sidebar__favorite" onClick={() => setLiked(false)}/> :
            <FavoriteBorderIcon fontSize="large" className="video-sidebar__favorite" onClick={ () => setLiked(true)} /> 
        )}
        <p>{likes}</p>
        </div>
        <div className="video-sidebar__button">
        <MessageIcon fontSize="large" className="video-sidebar__message" />
        <p>{messages}</p>
        </div>
        <div className="video-sidebar__button">
        <ShareIcon fontSize="large" className="video-sidebar__share" />
        <p>{shares}</p>
        </div>
        </div>        
    );
}
