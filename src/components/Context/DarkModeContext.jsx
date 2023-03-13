import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		localUpdate(!darkMode);
	};
	const localUpdate = (mode) => {
		if (mode) {
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
		} else {
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
		}
	};
	const localDarkMode = () => {
		const isDark =
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme:dark)").matches);
		setDarkMode(isDark);
		localUpdate(isDark);
	};
	useEffect(localDarkMode, []);
	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}
