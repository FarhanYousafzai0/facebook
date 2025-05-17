import axios from 'axios'

const URL = 'http://localhost:8000/api/post';


// Add Posts:

export const  addPost  = async(postData)=>{
const response = await axios.post(`${URL}/addPost/${postData.user_id}`,postData);
if (!postData.user_id) {
    throw new Error("user_id is missing!");
  }
  
return response.data

}

// Get Post

export const getallPost = async()=>{
    const response = await axios.get(`${URL}/get-all-posts`,)
    return response.data

}


// Add Reactions:


export const AddReactions = async (reactionsData) => {
  const response = await axios.post(
    `${URL}/make-reactions/${reactionsData.post_id}/${reactionsData.user_id}`,
    reactionsData
  );
  return response.data;
};





// Add-Comments:
export const addComments = async(postData,token)=>{

  // When we senting a token into backend ,so have to sent it in the config format :

  const config = {
    headers:{
      Authorizations:`Bearer ${token}`
    }
  }

  const response = axios.post(`${URL}/add-comments/${postData.post_id}`,postData,config);
  return response.data



}