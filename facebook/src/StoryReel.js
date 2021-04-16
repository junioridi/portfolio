import React from 'react';
import "./StoryReel.css";
import Story from "./Story.js";

export default function StoryReel() {
    return(
        <div className="story-reel">
            <Story profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-Yz7qQPJBEGIikR4X1Q_P0WbjYo-ZsAbxrHUku_lY=s32-c-mo" image="https://loremflickr.com/320/240" title="Fernando"/>
            <Story profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-Yz7qQPJBEGIikR4X1Q_P0WbjYo-ZsAbxrHUku_lY=s32-c-mo" image="https://loremflickr.com/320/240" title="Teste"/>
            <Story profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-Yz7qQPJBEGIikR4X1Q_P0WbjYo-ZsAbxrHUku_lY=s32-c-mo" image="https://loremflickr.com/320/240" title="outro"/>
            <Story profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-Yz7qQPJBEGIikR4X1Q_P0WbjYo-ZsAbxrHUku_lY=s32-c-mo" image="https://loremflickr.com/320/240" title="Mais um"/>
            <Story profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-Yz7qQPJBEGIikR4X1Q_P0WbjYo-ZsAbxrHUku_lY=s32-c-mo" image="https://loremflickr.com/320/240" title="outro again"/>
        </div>
    );

}
