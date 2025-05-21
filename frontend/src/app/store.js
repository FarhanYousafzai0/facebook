import {configureStore} from '@reduxjs/toolkit';

import userReducer from '../features/Users/userSlice.js';
import postReducer from '../features/Posts/postSlice.js'

const store = configureStore({
    reducer:{
 auth: userReducer,
 post:postReducer
    }
})

export default store;