import React from 'react';
import './Todo.css';

const Todo = (props) => {
  let classNames = "list-item";
  if (props.item.completed) {
    classNames += " line";
  }
	return (
		<li
			onClick={() => props.onMarkComplete(props.item.id)}
			className={classNames}
		>
			{props.item.task}
		</li>
	);
};

export default Todo;
