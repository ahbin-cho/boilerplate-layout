import React from "react";

interface TodoListProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
}

export const TodoList:React.FC<TodoListProps> = props =>{
    
    return (
        <ul>
            {
                props.items.map(todo=>{
                    return(
                        <li key={todo.id}>
                            <span>{todo.text}</span>
                            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}