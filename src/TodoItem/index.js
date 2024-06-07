import './TodoItem.css';
import React from 'react';
import { CompletedIcon } from '../TodoIcon/CompletedIcon.js';
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js';

function TodoItem(props){
	return (
  <li className="TodoItem">
    <CompletedIcon
      completed={props.completed}
      onCompleted={props.onCompleted}
    />
    <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p> 
    <DeleteIcon
      onDeleted = {props.onDeleted}
    />
  </li>
  );
}

export {TodoItem};