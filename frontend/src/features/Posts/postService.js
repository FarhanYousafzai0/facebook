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
