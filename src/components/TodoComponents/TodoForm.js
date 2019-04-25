import React from 'react';

const TodoForm = props => {
  return (
    <form className="todo-form" onSubmit={props.onSubmit}>
      <input type="text" placeholder="add todo" value={props.todoValue} name="task" onChange={props.onChange}/>
      <button>Add Todo</button><button type="button" onClick={() => props.onRemoveCompleted()}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;