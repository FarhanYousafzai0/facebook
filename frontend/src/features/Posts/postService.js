import axios from 'axios'

const URL = 'http://localhost:8000/api/post';




export const  addPost  = async(postData)=>{
const response = await axios.post(`${URL}/addPost/${postData.user_id}`,postData);
return response.data

}



export const getallPost = async()=>{
    const response = axios.get(`${URL}/get-all-posts`,)
    return response.data

}