import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseURL";

//get all products
export const getAllProductsAction = createAsyncThunk(
    "/get/product",
    async(category,{ rejectWithValue, getState, dispatch}) =>{
            //get user token
            console.log("slices  category : ",category);
             const user = getState()?.users;
            const { userAuth } = user;
            const config = {
            headers: {
                Authorization: `Bearer ${userAuth?.token}`,
                    },
                };
        console.log("product slices");
        try{
            const {data} = await axios.get(`${baseUrl}/api/products?category=${category}`,config);
            return data;
        }catch(error){
            if(!error.response) throw error;
            return rejectWithValue(error?.response?.data);
        }
    }
);

//get filtered products
export const getSelectedProductAction = createAsyncThunk(
    "/selected/products",
    async(filtered,{rejectWithValue,getState,dispatch})=>{
          //get user token
          console.log("filtered slices : ",filtered);
          const user = getState()?.users;
         const { userAuth } = user;
         const config = {
         headers: {
             Authorization: `Bearer ${userAuth?.token}`,
                 },
             };

             try{
                const {data} = await axios.post(`${baseUrl}/api/select-products`,filtered,config);
                return data;
            }catch(error){
                if(!error.response) throw error;
                return rejectWithValue(error?.response?.data);
            }
    }
)

const productSlices = createSlice({
    name:'products',
    initialState:{},
    extraReducers : builder =>{
        //get all products
        builder.addCase(getAllProductsAction.pending, (state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });

        builder.addCase(getAllProductsAction.fulfilled,(state,action)=>{
            state.productList = action?.payload;
            state.loading = false;
            state.appErr = undefined;
            state.serverErr = undefined;
        });

        builder.addCase(getAllProductsAction.rejected,(state,action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });

        //selected action

        builder.addCase(getSelectedProductAction.pending,(state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });

        builder.addCase(getSelectedProductAction.fulfilled,(state, action)=>{
            state.SelectedProductsList = action?.payload;
            state.loading = false;
            state.appErr = undefined;
            state.serverErr = undefined;
        });

        builder.addCase(getSelectedProductAction.rejected, (state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });
    }
});

export default productSlices.reducer;