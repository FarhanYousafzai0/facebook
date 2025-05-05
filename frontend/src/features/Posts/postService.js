import axios from 'axios'

const URL = 'http://localhost:8000/api/post';




export const  addPost  = async(postData)=>{
const response = await axios.post(`${URL}/addPost/${postData.user_id}`,postData);
if (!postData.user_id) {
    throw new Error("user_id is missing!");
  }
  
return response.data

}



export const getallPost = async()=>{
    const response = await axios.get(`${URL}/get-all-posts`,)
    return response.data

}