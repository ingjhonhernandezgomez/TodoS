import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import React from 'react';
import { TodoForm } from '../TodoForm';


function AppUI(){

    const {
		loading,
		error,
		searchTodos,
		completeTodo,
		deleteTodo,
        openModal
	} = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
                    {loading && <TodosLoading/>}
                    {error && <TodosError/>}
                    {(!loading && searchTodos.lenght == 0) && <EmptyTodos/>}
    
                    {searchTodos.map(todo => (
                        <TodoItem key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onCompleted={()=>completeTodo(todo.text)}
                        onDeleted={()=>deleteTodo(todo.text)}/>  
                    ))}
            </TodoList>

            <CreateTodoButton/>
            
            {
                openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )
            }
            
            
        </React.Fragment>
        );
}

export {AppUI};