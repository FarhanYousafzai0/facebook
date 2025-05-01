import {configureStore} from '@reduxjs/toolkit';

import userReducer from '../features/Users/userSlice';
import postReducer from '../features/Posts/postSlice'

const store = configureStore({
    reducer:{
 auth: userReducer,
 post:postReducer
    }
})

export default store;