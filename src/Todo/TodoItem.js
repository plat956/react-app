import React from "react";

export default function TodoItem({todo, index}) {
    return (
        <li>
            <span>
                <input type="checkbox" />
                <strong>{++index}</strong>&nbsp;
                {todo.title}
            </span>
            <button>&times;</button>
        </li>
    )
}