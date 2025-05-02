import React from 'react'
import AddPost from './Posts/AddPost'
import Feed from '../Facebook-Feed/Feed'

const Main_Content = () => {
  return (
    <div className=' h-full overflow-y-scroll  '>
<AddPost/>
<Feed/>
        
    </div>
  )
}

export default Main_Content
