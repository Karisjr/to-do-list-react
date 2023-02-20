import React from "react";

export default function ToDoItems(props) {
    const [done, setDone] = React.useState(props.todo.done)

    function deleteTodo(){
        console.log("DELETE")
        props.deleteTodo(props.todo.id)
    }
    
    return (
        <div className="todo-items" key={props.todo.id}>
            <input 
                type="checkbox" 
                onChange={e => setDone(e.target.checked)}
                checked={done} />
            <span>{props.todo.title}</span>
            <span 
                style={{position: "fixed", right: 450}}
                onClick={deleteTodo}
            >🗑️</span>
            <hr className="divider-todo-items" />
        </div>
    )
}