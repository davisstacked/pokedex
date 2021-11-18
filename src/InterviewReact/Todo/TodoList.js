// this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
import React, { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { Todo } from './Todo';
import { v4 as uuid } from "uuid";

import './TodoList.css'

export const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: uuid(), completed: false }
    setTodos(state => ([...state, newTodo]))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id, updatedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTask }
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

  const toggleCompletion = (id) => {
    const completedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });
    setTodos(completedTodos)
  }

  const renderTodos = () => {
    return (
      <ul>
        <li style={{listStyleType: "none"}}>
          {todos.map(todo => (
            <Todo
              remove={() => removeTodo(todo.id)}
              completed={todo.completed}
              update={updateTodo}
              task={todo.todo}
              key={todo.id}
              id={todo.id}
              toggleTodo={toggleCompletion}
            />
          ))}
        </li>
      </ul>
    )
  }

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      {renderTodos()}
      <NewTodoForm addTodo={addTodo}/>
    </div>
  )
}
