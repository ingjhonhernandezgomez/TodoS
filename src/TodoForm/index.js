import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [NewTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(NewTodoValue);
        setOpenModal(false);
    }

    const onCancel = ()=>{
        setOpenModal(false)
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }

    return(
    
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Hacer ejercicio"
                value={NewTodoValue}
                onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button type="button"
                className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button type="Submit"
                className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
            
        </form>

    );
}

export {TodoForm}