import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import styles from "../css/Login.modules.css";
import { loginSchema } from "../validator/Schema";
import Button from "./Button";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Login</h1>
      <h5>Login to continue</h5>
      <p>Thank you for patronizing us, sign in to enjoy our brilliant services</p>

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <p>
              <input type="checkbox" name="receive-email" id="receive-email" />
              Remember me
            </p>
            <input type="button" value="Login" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
