import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import { Search } from '@material-ui/icons'

function Widgets() {
    return (
        <div className="widgets"> 
            <div className="widgets__input">
                <Search className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1402366159635156994"}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="calvinputera_" options={{height: 400}}/>
                <TwitterShareButton url={"https://www.instagram.com/calvinputera_/"} options={{text:"TESTING!! twitter embed", via: "calvinputera_"}}/>
            </div>
        </div>
    )
}

export default Widgets
