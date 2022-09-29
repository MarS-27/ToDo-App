import React, { useContext } from "react";
import Context from "../context";

export default function ToDoItem({ todo: { id, title, completed }, index, onChange }) {
    const { toggleList, deleteTodo } = useContext(Context);
    const classList = ["todo-list__item"];
    if (completed) classList.push("done");

    return (
        <li className={classList.join(" ")}>
            <div>
                <input 
                    className="checkbox" 
                    id={"checkbox-"+id} 
                    type="checkbox" 
                    checked={completed || ""} 
                    onChange={toggleList.bind(null, id)} 
                />
                <label htmlFor={"checkbox-"+id}>{index + 1}&nbsp;{ title }</label>
            </div>
            <button className="todo-list__btn" onClick={deleteTodo.bind(null, id)}>Delete</button>
        </li>
    )
}