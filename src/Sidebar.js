import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from './SidebarOption'
import { BookmarkBorder, Home, ListAlt, MailOutlined, MoreHoriz, NotificationsNoneOutlined, PermIdentity, Search } from '@material-ui/icons'
import {Button} from '@material-ui/core'


function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>

            {/* Sidebar Option  */}
            <SidebarOption active Icon={Home} text="Home"/>
            <SidebarOption Icon={Search} text="Search"/>
            <SidebarOption Icon={NotificationsNoneOutlined} text="Notifications"/>
            <SidebarOption Icon={MailOutlined} text="Messages"/>
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks"/>
            <SidebarOption Icon={ListAlt} text="Lists"/>
            <SidebarOption Icon={PermIdentity} text="Profile"/>
            <SidebarOption Icon={MoreHoriz} text="More"/>

            {/* Button */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
