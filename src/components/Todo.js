import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './AddTodoForm';

const Todo = () => {

   const [todos, setTodos] = useState([
        {id: 1, todo:'Acheter du pain'},
        {id: 2, todo:'Ranger sa chambre'},
        {id: 3, todo:'Arroser les plantes'}
    ])

    const [warning, setWarning] = useState(false)

    const myTodos = todos.map(todo => {
        return (
            <li className="list-group-item" key={todo.id}>{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {

        if(newTodo !== ''){

            warning && setWarning(false);

            setTodos([...todos, {
                id:uuidv4(),
                todo: newTodo
            }])
        } else {
            setWarning(true);
        }
        
    }

   const WarningMessage=  warning && <div className="alert alert-danger mt-3" role="alert">
    Merci d'indiquer une chose à faire !
  </div>

    return (
        <div>
            {WarningMessage}
          <h1 className="text-center">{todos.length} To-do</h1>
        
        <ul className="list-group">
            {myTodos}
        </ul>

        <AddTodoForm addNewTodo={addNewTodo}/>
        
        </div>
    )
}

export default Todo;
