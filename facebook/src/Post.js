import React from 'react';
import "./Post.css";
import { Avatar }  from "@material-ui/core"
import { useStateValue } from "./StateProvider.js";

export default function Post({userName, message, timeStamp, image, profilePic}) {

    const [{user}, dispatch] = useStateValue();
    return (

        <div className="post">

            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
               <div className="post__top-info">
                    <h3>{userName}</h3>
                    <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom"> 
                <p>{message}</p>
                { image &&
                    <div className="post__image">
                        <img src={image} alt="" />
                    </div>
                }
        
            </div>
        </div>

    );
}
