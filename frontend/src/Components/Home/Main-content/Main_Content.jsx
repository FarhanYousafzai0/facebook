import React, { useEffect } from 'react'
import AddPost from './Posts/AddPost'
import Feed from '../Facebook-Feed/Feed'
import { useDispatch, useSelector } from 'react-redux'
import { getFacebookPost, postReset } from '../../../features/Posts/postSlice'
import Story from '../../../Pages/Story/Story'

const Main_Content = () => {
const dispatch = useDispatch()

const {postLoading,postError,postMessage,post} = useSelector((state)=>state.post)

useEffect(()=>{
  dispatch(getFacebookPost());
  dispatch(postReset())

},[])


  return (
    <div className=' h-full overflow-y-scroll  '>


<AddPost/>
<Story/>

 {post?.map((item,index)=>{
  return  <Feed key={index} {...item} />
 }
 

)}

        
    </div>
  )
}

export default Main_Content
