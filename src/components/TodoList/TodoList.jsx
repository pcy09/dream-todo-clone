import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Header from "../Header/Header";
import TodoItems from "../TodoItems/TodoItems";
import styles from "./TodoList.module.css";

export default function TodoList() {
	const [todos, setTodos] = useState(() => getLocalTodo());
	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
	};
	const [filters, setFilters] = useState(["all", "active", "completed"]);
	const [filter, setFilter] = useState(filters[0]);
	const filterChange = (e) => {
		setFilter(e.target.textContent);
	};
	const localTodo = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	useEffect(localTodo, [todos]);
	return (
		<div className={styles.container}>
			<Header filters={filters} filterChange={filterChange} filter={filter} />
			<TodoItems todos={todos} setTodos={setTodos} filter={filter} />
			<AddTodo handleAdd={handleAdd} />
		</div>
	);
}
const getLocalTodo = () => {
	const todos = JSON.parse(localStorage.getItem("todos"));
	return todos ? todos : [];
};
