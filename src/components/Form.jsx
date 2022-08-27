import React from 'react';

function Form({ inputText, setInputText, todos, setTodos, setFilter }) {
	const handleTextInput = (e) => {
		setInputText(e.target.value);
	};

	const handleTodoSubmit = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText('');
	};

	const handleFilter = (e) => {
		setFilter(e.target.value);
	};

	return (
		<form onSubmit={handleTodoSubmit}>
			<input
				type='text'
				className='todo-input'
				onChange={handleTextInput}
				value={inputText}
			/>
			<button type='submit' className='todo-button'>
				<i className='fas fa-plus square'></i>
			</button>
			<div className='select'>
				<select name='todos' className='filter-todo' onChange={handleFilter}>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
}

export default Form;
