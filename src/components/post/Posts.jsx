import React, { useState } from 'react'
import Post from './Post'
import '../../styles/Posts.css'

const Posts = () => {
  const [currentTab, setCurrentTab] = useState('seek')
  const handleSwitchClick = (tab) => {
    if (currentTab !== tab) {
      setCurrentTab(tab);
    }
  }

  
  return (
    <div>
      <div className="posts-tab-switches">
        <div className="posts-tab-switch-btns">
          <button className={`${currentTab == 'seek' ? 'active' : ' ' }`} onClick={ ()=> handleSwitchClick('seek')} >Seek</button>
          <button className={`${currentTab == 'post' ? 'active' : ' ' }`} onClick={ ()=> handleSwitchClick('post')}>Post</button>
        </div>
      </div>
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Posts