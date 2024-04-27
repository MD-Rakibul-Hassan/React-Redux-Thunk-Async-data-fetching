
import React from 'react'

const Todo = ({ todo }) => {
    console.log(todo);
    const { userId, id, title } = todo;
    const styles = {
        backgroundColor: "blue",
        color: "white",
        padding: '20px',
        textAlign: 'center',
        margin:'20px'
    }
  return (
    <div style={styles}>
          <h1>{id}</h1>
          <p>{title}</p>
    </div>
  )
}

export default Todo
