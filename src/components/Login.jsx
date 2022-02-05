import React from "react";
import logo from '../assets/logo1.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../css/Login.css';

const Login = () => {
  return (
    <>
    <div className="logo">
      <img src={logo} alt="" />
      <h4>Lottery Display</h4>
    </div>
    <div className="form-header">
      <p>Login</p>
      <h5>Login to your account</h5>
      <p>Thank you for getting back to this page, sign in to enjoy our brilliant services</p>
    </div>

    <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <div>
            <label>Username</label> <br />
            <Field type="email" name="email" placeholder="Email or Phone Number" className="form-field" />
            <ErrorMessage name="email" component="div" />
           </div>
           <br />
           <div className="form-password">
            <label>Password</label> <br />
            <Field type="password" name="password" placeholder="Password" className="form-field" />
            <ErrorMessage name="password" component="div" />
           </div>
           <div className="check">
              <input type="checkbox" name="remember" id="remember" />
              <p>Remember me</p>
              </div>
           <br />
           <br />
           <button type="submit" disabled={isSubmitting}>
             Login
           </button>
         </Form>
       )}
     </Formik>
     <p>Don't have an account? <a href="register">Register</a></p>
    </>
  );
};

export default Login;
