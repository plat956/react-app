import React from 'react'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0
    }
}

export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {
                props.todos.map((t, index) => {
                    return <TodoItem todo={t} key={t.id} index={index} onChange={props.onToggle} />
                })
            }
        </ul>
    )
}