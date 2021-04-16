import React from 'react';
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

export default function SidebarRow({src, Icon, title}/*props*/) {
    return (

        <div className="sidebar-row"> 
            { !Icon && !src && <Avatar /> }
            { src && <Avatar src={src} /> }
            { Icon && <Icon /> }
            <h4>{/*props.*/title}</h4>
        </div>

    );
}
