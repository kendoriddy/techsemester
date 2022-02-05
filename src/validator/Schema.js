import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  username: yup
    .string()
    .required("This field is required")
    .min(6, "This field must be 6 characters or more")
    .max(20, "This field must be 20 characters or less"),
  phone: yup
    .string()
    .required("This field is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  email: yup.string().email("Email is invalid").required("Required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = yup.object({
  username: yup
    .string()
    .required("This field is required")
    .min(6, "This field must be 6 characters or more")
    .max(20, "This field must be 20 characters or less"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Required"),
});
