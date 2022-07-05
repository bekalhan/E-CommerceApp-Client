import React from 'react';
import './Register.css';
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { registerUserAction } from "../../redux/slices/Users/userSlices";


const formSchema = Yup.object({
    username: Yup.string().required("usename is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

function Register() {

    const dispatch = useDispatch();

  //formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: values => {
      //dispath the action
      dispatch(registerUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });


    //select state from store
    const storeData = useSelector(store => store?.users);
    const { userAuth } = storeData;
    const { loading, appErr, serverErr, registered } = storeData;
  
    //redirect
    if (registered) {
      return <Redirect to="/login" />;
    }

    if(userAuth){
        return <Redirect to="/" />
    }


  return (
    <div className='Register'>
        <div className='formRegister'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Log In</h2>
                {appErr || serverErr  ?(
                    <div>
                        {serverErr}  {appErr}
                    </div>
                ): null }

                <input
                 value={formik.values.username}
                 onChange={formik.handleChange("username")}
                 onBlur={formik.handleBlur("username")}
                 type="username"
                  placeholder='enter usename' />

                 <div className="text-red-400 mb-2">
                    {formik.touched.username && formik.errors.username}
                  </div>

                <input
                 value={formik.values.email}
                 onChange={formik.handleChange("email")}
                 onBlur={formik.handleBlur("email")}
                 type="email"
                 placeholder='enter email' />


                  <div className="text-red-400 mb-2">
                    {formik.touched.email && formik.errors.email}
                  </div>

                <input
                 value={formik.values.password}
                 onChange={formik.handleChange("password")}
                 onBlur={formik.handleBlur("password")}
                 type="password"
                placeholder="enter password" />


                 <div className="text-red-400 mb-2">
                    {formik.touched.password && formik.errors.password}
                  </div>

                <button type='submit'>Log In</button>
            </form>  
        </div>
    </div>
  )
}

export default Register