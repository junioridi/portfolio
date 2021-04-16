import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { useStateValue } from "./StateProvider.js";

export default function Sidebar() {
    const [{user}, dispatch ] = useStateValue();
    return (

        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        </div>

    );
}
