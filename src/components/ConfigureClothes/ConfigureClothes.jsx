import React from 'react';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import './ConfigureClothes.css';
import {getSelectedProductAction} from '../../redux/slices/Products/productSlices';
import AllProduct from '../AllProduct/AllProduct';




function ConfigureClothes(props) {


    //dispath
    const dispatch = useDispatch();

    //formik
    const formik = useFormik({
      initialValues: {
        color: "Random",
        size: "Random",
      },
      onSubmit: values => {
        //dispath the action
        dispatch(getSelectedProductAction(values));
        console.log(values);
      },
    });

    const store = useSelector(store => store.products);
    const {loading , appErr ,serverErr , SelectedProductsList} = store;

    return (
    <div className='ConfigureClothes'>
        <div className='green-line'>
             Super Deal! Free Shopping on Orders Over SSO
        </div>
        <div className="t-gender">
            {props.category}
        </div>
        <div className='product'>
          <form onSubmit={formik.handleSubmit}>
          <div className='filter-product'>
                <h3>Filter Products : </h3>
                <select
                value={formik.values.color}
                onChange={formik.handleChange("color")}
                onBlur={formik.handleBlur("color")}
                className="opt" id="" name="color">
                  <option value="Random">Random</option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="yellow">Yellow</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                </select>
                <select
                  value={formik.values.size}
                  onChange={formik.handleChange("size")}
                  onBlur={formik.handleBlur("size")}
                className="opt" id="" name="size">
                <option value="Random">Random</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>

                </select>

                <button type='submit'>filter</button>

            </div>
            <div className='filtered-product-list'>
                {SelectedProductsList?.map((product) =>(
                  <div>
                  <h3>Filtered Products</h3>
                    <div className='filter-product-container'>
                        <img src={product.img}></img>
                    </div>
                  </div>
                  
                ))}
            </div>
          </form>
     </div>      
        <h3 className="h3-all">All Products</h3>
    </div>
  )
}

export default ConfigureClothes