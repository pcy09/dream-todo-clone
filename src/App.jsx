import "./App.css";
import { DarkModeProvider } from "./components/Context/DarkModeContext";
import TodoList from "./components/TodoList/TodoList";

function App() {
	return (
		<DarkModeProvider>
			<TodoList />
		</DarkModeProvider>
	);
}

export default App;
