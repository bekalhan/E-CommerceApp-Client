import React from 'react';
import './AllProduct.css';
//import {AllProducts} from '../../data';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllProductsAction} from '../../redux/slices/Products/productSlices';
import ConfigureClothes from '../ConfigureClothes/ConfigureClothes';
import { Link } from "react-router-dom";


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
              <Link
              to={`/product/${product.id}`}
              >
                 <img className='product-img' src={product.img}></img>
              </Link> 
        </div>
        ))}


    </div>
  )
}

export default AllProduct