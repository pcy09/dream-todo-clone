import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ handleAdd }) {
	const [text, setText] = useState();
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length === 0) {
			return setText("");
		} else {
			handleAdd({ id: uuidv4(), text, status: "active" });
			setText("");
		}
	};
	return (
		<div className={styles.addContainer}>
			<form onSubmit={handleSubmit}>
				<input type="text" value={text || ""} onChange={handleChange} />
				<button>Add</button>
			</form>
		</div>
	);
}
