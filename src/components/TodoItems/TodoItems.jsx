import React from "react";
import styles from "./TodoItems.module.css";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoItems({ todos, setTodos, filter }) {
	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	};
	const onDelete = (deleted) => {
		setTodos(todos.filter((e) => e.id !== deleted.id));
	};
	const getFilterdItems = () => {
		if (filter === "all") {
			return todos;
		} else {
			return todos.filter((e) => e.status === filter);
		}
	};
	const filterdItems = getFilterdItems();
	return (
		<section className={styles.section}>
			<ul className={styles.todoGroup}>
				{filterdItems.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleUpdate={handleUpdate}
						onDelete={onDelete}
					/>
				))}
			</ul>
		</section>
	);
}
