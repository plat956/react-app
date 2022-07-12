import React, { useState } from 'react'

function AddTodo({ onCreate }) {
    const [value, setValue] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        onCreate(value);
        setValue("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit">Create</button>
        </form>
    )
}

export default AddTodo;