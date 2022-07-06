import { configureStore } from "@reduxjs/toolkit";
import usersSlices from '../slices/Users/userSlices';
import productSlices from "../slices/Products/productSlices";

const store = configureStore({
    reducer :{
        users : usersSlices,
        products : productSlices
    }
});

export default store;