import React from "react";
// import "../css/Register.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import styles from "../css/Login.modules.css";
import { registerSchema } from "../validator/Schema";
import * as yup from "yup";

const Register = () => {
  // Render Prop
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextField label="First Name" name="first-name" type="text" />
            <TextField label="Last Name" name="last-name" type="text" />
            <TextField label="Phone Number" name="number" type="number" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirm-password" type="password" />
            <p>
              <input type="checkbox" name="receive-email" id="receive-email" />
              Yes, I want to receive Lottery Display emails
            </p>
            <p>
              <input type="checkbox" name="terms" id="terms" />I agree to all terms, Privacy Policy
              and Fees
            </p>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
