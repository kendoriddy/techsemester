import React from "react";
import styles from '../css/Login.modules.css';
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={field.name} className={styles.label}>{label}</label>
			<input
				className={`form-control shadow-none ${
					meta.touched && meta.error && "is-invalid"
				}`}
				{...field}
				{...props}
				autoComplete="off"
			/>
			<ErrorMessage
				component="div"
				name={field.name}
				className={styles.error}
				style={{ width: "350px", marginTop: "-20px" }}
			/>
		</>
	);
};
