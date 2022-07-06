import React from 'react';
import './AllProduct.css';
//import {AllProducts} from '../../data';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllProductsAction} from '../../redux/slices/Products/productSlices';

function AllProduct(props) {

  const product = useSelector(store=>store.products);
  const {productList , loading ,serverErr,appErr} = product;


  const dispatch = useDispatch();

  //fetch product 
  useEffect(()=>{
    dispatch(getAllProductsAction(props.category));
  },[]);

  console.log("product list : ",productList);

  return (
    <div className='AllProduct'>
        {productList?.map((product)=>(
             <div className='product-container'>
             <img className='product-img' src={product.img}></img>
        </div>
        ))}


    </div>
  )
}

export default AllProduct