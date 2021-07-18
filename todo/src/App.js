import React from 'react'
import Todo from './component/Todo'
import TodoForm from './component/TodoForm'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {

    const [todos, setTodos ] = React.useState([
      { text: "Complete online JavaScript course", isCompleted: false },
      { text: "Jog arounf the park 3X", isCompleted: false },
      { text: "10 minutes meditation", isCompleted: false },
      { text: "Pick up groceries", isCompleted: false },
      { text: "Complete online HTML, CSS course", isCompleted: false },
      { text: "Go out with my friends", isCompleted: false },

    ])

    //Add new task
    const addTodo = text => {
      const newTodos = [...todos, { text }]
      setTodos(newTodos)
    }

    // Complete a task
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


    return(
      <div id="main">
        <Header />

        <div className="current-typing">
          <button className="checkbox" name="current-task" aria-label="add task" disabled></button>
          <TodoForm addTodo={addTodo} id="task" placeholder="Currently typing"/>
        </div>

        <div className="todo-app">
            <div className="todo-list">
              <ul className="list">
                  {todos.map(( todo, index) => (
                    <li key={index}>
                      <div className="arrange">
                        <Todo
                          key={index}
                          todo={todo}
                          index={index}
                          CompleteTodo={CompleteTodo}
                          removeTodo={removeTodo}
                        />
                      </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

    )

}

export default App;
