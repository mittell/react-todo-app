import React from 'react';

function Todo({ todo, todos, setTodos }) {
	const handleDelete = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const handleComplete = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}

				return item;
			})
		);
	};

	return (
		<div className='todo'>
			<li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
				{todo.text}
			</li>
			<button className='complete-btn' onClick={handleComplete}>
				<i className='fas fa-check'></i>
			</button>
			<button className='trash-btn' onClick={handleDelete}>
				<i className='fas fa-trash'></i>
			</button>
		</div>
	);
}

export default Todo;
