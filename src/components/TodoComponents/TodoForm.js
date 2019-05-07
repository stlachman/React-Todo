import React from 'react';

const TodoForm = (props) => {
	return (
		<div className="form-wrapper">
			<form className="todo-form" onSubmit={props.onSubmit}>
				<div className="form-field">
					<input
						type="text"
						placeholder="add todo"
						value={props.todoValue}
						name="task"
						onChange={props.onChange}
					/>
				</div>
				<button className="btn">Add New Item</button>
			</form>
			<div className="clear-section">
				<button className="clear-btn" onClick={() => props.onRemoveCompleted()}>
					Clear Completed
				</button>
			</div>
		</div>
	);
};

export default TodoForm;
