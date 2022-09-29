import React, { useState } from "react";

export default function AddToDo({ addTodo }) {
    const [ input, setInput ] = useState("");

    const inputChange = e => setInput(e.currentTarget.value);

    const formSubmit = e => {
        e.preventDefault();
        addTodo(input);
        setInput("");
    }

    return (
        <form className="add-form" onSubmit={formSubmit}>
            <input 
                type="text" 
                className="add-form__input" 
                placeholder="Enter ToDo!"
                value={input}
                onChange={inputChange}
            />
            <button className="todo-list__btn">Add ToDo</button>
        </form>
    )
}