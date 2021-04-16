import React from 'react';
import "./Feed.css";
import SidebarRow from "./SidebarRow.js";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";
import db from "./firebase.js";
import {useState, useEffect} from "react";

export default function Feed() {

       /*{ (["teste", "outro", "mais um"]).map( (item, index) =>
            (
                <Post userName="calzz"         
                    message={item}
                timeStamp={Date().toLocaleString() }  
                image={ "https://loremflickr.com/320/240?random=" + index}  
                />
            ))
        }*/
 
    
    
    const[posts, setPosts] = useState([]);

    useEffect( () =>  {
        db.collection("posts")
            .orderBy("timeStamp", "desc")
            .onSnapshot(snapshot =>
            setPosts(snapshot.docs.map((doc) => ({ key:doc.id, data: doc.data() } )))
        );
        console.log(posts);
    }, [] );
    
    return (

        <div className="feed">
            <StoryReel />
            <MessageSender />

        {posts.map( (post) => 
            (
                <Post
                    key={post.key}
                    profilePic={post.data.profilePic}
                    userName={post.data.userName}
                    message={post.data.message}
                    timeStamp={post.data.timeStamp}
                    image={post.data.image}
                />
            ))
        }


       </div>

    );
}
