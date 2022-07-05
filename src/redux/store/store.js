import { configureStore } from "@reduxjs/toolkit";
import usersSlices from '../slices/Users/userSlices';

const store = configureStore({
    reducer :{
        users : usersSlices
    }
});

export default store;