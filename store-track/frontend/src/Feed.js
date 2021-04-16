import React from 'react';
import "./Feed.css";
import {useState, useEffect} from "react";
import {useStateValue} from "./StateProvider.js";

export default function Feed() {
    
    const[posts, setPosts] = useState([]);

    /*
     *
     *
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

        useEffect( () =>  {
        db.collection("posts")
            .orderBy("timeStamp", "desc")
            .onSnapshot(snapshot =>
            setPosts(snapshot.docs.map((doc) => ({ key:doc.id, data: doc.data() } )))
        );
        console.log(posts);
    }, [] );*/
    
    return (

        <div className="feed">
 
        { (["teste", "outro", "mais um"]).map( (item, index) =>
            (
                <div className="feed-test" userName="calzz" message={item} timeStamp={Date().toLocaleString() } > 
                    <img src={ "https://loremflickr.com/320/240?random=" + index} /> 

                </div>
            ))
        }
 


       </div>

    );
}
