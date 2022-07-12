import React, { useContext } from "react";
import Context from "../context"

export default function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context);

    const classes = [];
    if(todo.completed) {
        classes.push("done");
    }

    return (
        <li>
            <span className={classes.join(" ")}>
                <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
                <strong>{++index}</strong>&nbsp;
                {todo.title}
            </span>
            <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}