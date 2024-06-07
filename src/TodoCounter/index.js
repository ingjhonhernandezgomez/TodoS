import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
import React from 'react';

function TodoCounter(){

  const {
    totalTodos, 
    completedTodos} = React.useContext(TodoContext);

    return(
      
      <h1 className="TodoCounter">
        Has completado <b>{totalTodos}</b> de <b>{completedTodos}</b> TODOs
      </h1>
    );
}

export {TodoCounter};