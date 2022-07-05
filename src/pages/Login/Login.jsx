import React from 'react';
import './Login.css';
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginUserAction } from "../../redux/slices/Users/userSlices";


//Form schema
const formSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });


function Login() {

    const dispatch = useDispatch();
    //formik
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: values => {
        //dispath the action
        dispatch(loginUserAction(values));
      },
      validationSchema: formSchema,
    });

      //redirect
  const store = useSelector(state => state?.users);
  const { userAuth, loading, serverErr, appErr } = store;

  if(userAuth){
    return <Redirect to={'/'} />
  }

  return (
    <div className='Login'>
    <div className='formLogin'>
        <form onSubmit={formik.handleSubmit}>
            <h2>Sign Up</h2>
            {appErr || serverErr  ?(
                    <div>
                        {serverErr}  {appErr}
                    </div>
                ): null }

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

            <button type="submit">Sign Up</button>
        </form>

    </div>
</div>
  )
}

export default Login