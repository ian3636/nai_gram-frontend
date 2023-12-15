import React, { useState } from 'react'
import './Timeline.css'
import Suggestion from '../suggestion/Suggestion'
import Post from './post/Post'

function Timeline() {
  const[posts, setPosts] = useState([
    {
      user: 'ian_',
      postImage: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 12,
      timestamp: '.2d',
    },

    {
      user: 'erick',
      postImage: "https://images.pexels.com/photos/19479510/pexels-photo-19479510/free-photo-of-a-woman-in-a-coat-standing-in-front-of-a-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      likes: 12,
      timestamp: '.2h',
    },

    {
      user: 'jont',
      postImage: "https://images.pexels.com/photos/17613609/pexels-photo-17613609/free-photo-of-street-musician-playing-violin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      likes: 12,
      timestamp: '.1d',
    },

  ])
  return (
    <div className='timeline'>
        <div className='timeline__left'>
        <div className='timeline__posts'>
          {posts.map((post) => (
            <Post user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp} />
          ))}
        </div>
        </div>
        <div className='timeline__right'>
            <Suggestion />
        </div>
    </div>
  )
}

export default Timeline
