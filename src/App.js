import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		const handleFilter = () => {
			switch (filter) {
				case 'completed':
					setFilteredTodos(todos.filter((todo) => todo.completed === true));
					break;
				case 'uncompleted':
					setFilteredTodos(todos.filter((todo) => todo.completed === false));
					break;
				default:
					setFilteredTodos(todos);
					break;
			}
		};

		handleFilter();
	}, [todos, filter]);

	return (
		<div>
			<header>
				<h1>Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setFilter={setFilter}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
}

export default App;
