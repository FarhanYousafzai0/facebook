import React, { useEffect } from 'react'
import AddPost from './Posts/AddPost'
import Feed from '../Facebook-Feed/Feed'
import { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Main_Content = () => {

const dispatch = useDispatch()


  return (
    <div className=' h-full overflow-y-scroll  '>
<AddPost/>


  <Feed/>

        
    </div>
  )
}

export default Main_Content
