import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import lottery from "../assets/lottery.JPG";
import "../css/Register.css";

const Register = () => {
  return (
    <div className="overall">
      <div>
        <img src={lottery} alt="placeholder" style={{ height: "100vh" }} />
      </div>
      <div className="form-container">
        
        <div className="form-header">
          <p>Register</p>
          <h5>Manage all your lottery efficiently</h5>
          <p>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>
        </div>

        <Formik
          initialValues={{ firstName: "", lastName: "", phoneNumber: "", email: "", password: "", confirmPassword: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Invalid email address";
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
              <div className="register-form">
                <div>
                  <label>First Name</label> <br />
                  <Field
                    type="text"
                    name="firstName"
                    className="form-field"
                    required
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label>Last Name</label> <br />
                  <Field
                    type="text"
                    name="lastName"
                    className="form-field"
                    required
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label>Phone Number</label> <br />
                  <Field
                    type="number"
                    name="phone"
                    className="form-field"
                    required
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label>Email</label> <br />
                  <Field
                    type="email"
                    name="email"
                    className="form-field"
                    required
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label>Password</label> <br />
                  <Field
                    type="password"
                    name="password"
                    className="form-field"
                    required
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div>
                  <label>Confirm Password</label> <br />
                  <Field
                    type="password"
                    name="password"
                    className="form-field"
                    required
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
              </div>
              <div className="check">
              <input type="checkbox" name="remember" id="remember" required />
              <p>Yes I want to receive lottery display emails</p>
              </div>
              <br />
              <div className="check">
              <input type="checkbox" name="terms" id="terms" required />
              <p>I agree to all the terms, privacy policy and Fees</p>
              </div>
              <br />
              <br />
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
