import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
import React from 'react'
import './Post.css'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src=""/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>JONO{" "}<span className="post__headerSpecial"><VerifiedUser className="post__badge"/> @jonosuper88</span></h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet vel ipsa.</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/KEf7gXqvQ8B3SWnUid/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small"/>
                    <Repeat fontSize="small"/>
                    <FavoriteBorder fontSize="small"/>
                    <Publish fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post
