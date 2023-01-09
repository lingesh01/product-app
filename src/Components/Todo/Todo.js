import React from 'react'
import "./Todo.css"

const Todo = ({ product, amount }) => {
    return (
        <div className='todo-container' >
            <h3>{product} - ₹{amount}</h3>
        </div>
    )
}

export default Todo