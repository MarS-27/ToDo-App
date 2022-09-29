import React from "react";
import ToDoItem from "./TodoItem";

export default function ToDoList(props) {
    return (
        <ul className="todo-list">
            {
                props.todos.map((todo, i) => <ToDoItem todo={todo} key={todo.id} index={i} />)
            } 
        </ul>
    )
}