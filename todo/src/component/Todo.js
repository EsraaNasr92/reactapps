import React from 'react'
import iconCross from './images/iconCross.svg'

function Todo({ todo, index, CompleteTodo, removeTodo, editTodo }){

  let id= '';
  if(todo.isCompleted){
    id += 'checked';
  }

  return(
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <button id={id} className="checkbox" onClick={() => CompleteTodo(index)}></button>
        {todo.text}
      <button className="close" onClick={() => removeTodo(index)}>
        <img src={iconCross} alt="Remove todo" />
      </button>

    </div>
  )
}

export default Todo;
