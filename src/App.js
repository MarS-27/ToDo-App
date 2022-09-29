import React from 'react';
import './App.css';
import AddToDo from './components/AddTodo';
import ToDoList from './components/TodoList';
import Context from './context';

function App() {

  const [ todos, setTodos ] = React.useState([
    { id: 1, title: "Buy bread", completed: true },
    { id: 2, title: "Buy milk", completed: false },
    { id: 3, title: "Buy beer", completed: true },
  ]);

  function toggleList(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    )
  };

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  function addTodo(title) {
    if (title) {
      setTodos(
        todos.concat([{
          id: todos.length + 1,
          title,
          comleted: false,
        }])
      )
    } 
  }

  return (
    <Context.Provider value={{ toggleList, deleteTodo }}>
      <div className="App">
        <h1 className="App__title">ToDo List</h1>
        <AddToDo addTodo={addTodo} />
        { todos.length ? <ToDoList todos={todos} /> : <p className="list-empty">List is empty!</p> }
      </div>
    </Context.Provider>
  );
}

export default App;