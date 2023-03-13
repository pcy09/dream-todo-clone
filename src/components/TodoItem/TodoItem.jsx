import React from "react";
import { FaTrash } from "react-icons/fa";

export default function TodoItem({ todo, handleUpdate, onDelete }) {
	const { id, text, status } = todo;
	const handleChange = (e) => {
		const status = e.target.checked ? "completed" : "active";
		handleUpdate({ ...todo, status });
	};
	const handleDelete = () => {
		onDelete(todo);
	};
	return (
		<li>
			<input
				id={id}
				type="checkbox"
				checked={status === "completed"}
				onChange={handleChange}
			/>
			<label htmlFor={id}>{text}</label>
			<button onClick={handleDelete}>
				<FaTrash />
			</button>
		</li>
	);
}
