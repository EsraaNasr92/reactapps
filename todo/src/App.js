import React, { useState } from 'react'
import Todo from './component/Todo'
import TodoForm from './component/TodoForm'
import Header from './component/Header'
import Footer from './component/Footer'
import FilterButton from './component/FilterButton'

// for filter
const FILTER_MAP ={
  All: () => true,
  Active: task => !task.isCompleted,
  Complete: task => task.isCompleted
}
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {

    const [todos, setTodos ] = React.useState([
      { id: 1, text: "Complete online JavaScript course", isCompleted: false },
      { id: 2, text: "Jog arounf the park 3X", isCompleted: false },
      { id: 3, text: "10 minutes meditation", isCompleted: false },
      { id: 4, text: "Pick up groceries", isCompleted: false },
      { id: 5, text: "Complete online HTML, CSS course", isCompleted: false },
      { id: 6, text: "Go out with my friends", isCompleted: false },

    ])

    //Add new task
    const addTodo = text => {
      const newTodos = [...todos, { text }]
      setTodos(newTodos)
    }

    // update a complete a task
    const CompleteTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    }

    // Remove a task
    const removeTodo = index =>{
      const newTodos = [...todos];
      newTodos.splice(index,1);
      setTodos(newTodos);
    }


    // Update todo
    const [ isEditing, setIsEditing ] = useState(false)
    const [ currentTodo, setCurrentTodo ] = useState({})

    // function to get the value of the edit input and set the new state
    function handleEditInputChange(e) {
      setCurrentTodo({ ...currentTodo, text: e.target.value });
      //console.log(currentTodo);
    }
    // function to handle when the "Edit" button is clicked
    function handleEditClick(todo) {
      setIsEditing(true);
      setCurrentTodo({ ...todo });
    }

     // function to edit a todo item
     function handleUpdateTodo(id, updatedTodo) {
       const updatedItem = todos.map((todo) => {
         return todo.id === id ? updatedTodo : todo;
       });

       setIsEditing(false);
       setTodos(updatedItem);
     }

     function handleEditFormSubmit(e) {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
      }


      // Add filter
      const [filter, setFilter] = useState('All')


      // Remove Completed Task
      const removeCompletedTodo = id => {
        setTodos(todos.filter(todo => todo.isCompleted !== true));
      };




    return(
      <div id="main">
        <Header />

        {isEditing ? (
          <div className="current-typing">
          <button className="checkbox" name="current-task" aria-label="add task" disabled></button>
            <form onSubmit={handleEditFormSubmit}>
              <div className="editInput">
                <input
                  name="editTodo"
                  type="text"
                  placeholder="Edit todo"
                  value={currentTodo.text}
                  onChange={handleEditInputChange}
                  className="input"
                />
              </div>
              <div className="btn-group">
                  <button className="btn-update" type="submit">Update</button>
                  <button className="btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </form>

          </div>
          ) : (
            <div className="current-typing">
              <button className="checkbox" name="current-task" aria-label="add task" disabled></button>
              <TodoForm addTodo={addTodo} id="task" placeholder="Currently typing"/>
            </div>
        )}

          <div className="todo-app">
            <div className="todo-list">
              <ul className="list">
                  {todos.filter(FILTER_MAP[filter]).map(( todo, index) => (
                    <li key={index}>
                      <div className="arrange">
                        <Todo
                          key={index}
                          todo={todo}
                          index={index}
                          CompleteTodo={CompleteTodo}
                          removeTodo={removeTodo}
                          handleEditClick={handleEditClick}
                        />
                      </div>
                    </li>
                ))}
            </ul>
            <div className="todo-footer">
                <div className=""> {todos.filter(todo => todo.id).length}    items left</div>
                 <div className="filter">
                    <ul>
                        {FILTER_NAMES.map(name => (
                          <li key={name}>
                              <FilterButton
                                key={name}
                                name={name}
                                isPressed={name === filter}
                                setFilter={setFilter}
                               />
                            </li>
                        ))}
                      </ul>
                    </div>
              <div className="clearCompleted"><button onClick={() => removeCompletedTodo()}>Clear Completed</button></div>
            </div>
          </div>
        </div>
      </div>

    )

}

export default App;
