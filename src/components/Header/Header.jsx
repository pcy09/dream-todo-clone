import React, { useContext } from "react";
import styles from "./Header.module.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { DarkModeContext } from "../Context/DarkModeContext";

export default function Header({ filters, filterChange, filter }) {
	const handleFilter = (e) => {
		filterChange(e);
	};
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
	return (
		<header className={styles.header}>
			<button className={styles.toggleButton} onClick={toggleDarkMode}>
				{darkMode ? <BsMoonFill /> : <BsSunFill />}
			</button>
			<ul className={styles.filterGroup}>
				{filters.map((item, index) => (
					<li
						key={index}
						onClick={handleFilter}
						className={`${styles.filter} ${filter === item && styles.selected}`}
					>
						{item}
					</li>
				))}
			</ul>
		</header>
	);
}
