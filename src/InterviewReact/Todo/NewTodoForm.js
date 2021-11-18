// this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created.

import React, { useState } from 'react';

import "./NewTodoForm.css"

export const NewTodoForm = ({addTodo}) => {

  const [todo, setTodo] = useState({todo: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({todo: ''});
  }

  const handleChange = (e) => {
    setTodo(state => ({...state, [e.target.name]: e.target.value }))
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo</label>
      <input
        onChange={handleChange}
        name="todo"
        value={todo.todo}
        type="text" />
      <button>Add ToDo</button>
    </form>
  )
}
