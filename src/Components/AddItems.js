import React from "react";

export default function AddItem(props) {
    const id = React.useId()
    const [todoName, setTodoName] = React.useState("")
    
    function addNewNote(e){
        e.preventDefault();
        console.log("I was clicked")
        if(todoName === "") {
            console.log("Empty input!")
            return
        }
        props.addNewNote(todoName)
    }
    
    return (
        <section className="add-item">
            <form>
                <input 
                    id={id}
                    className="input-add-item" 
                    type="text" 
                    placeholder="Add a to do item"
                    value={todoName} 
                    onInput={e => setTodoName(e.target.value)}/>
                <button 
                    className="button-add-item" 
                    onClick={addNewNote}>+
                </button>
            </form>
        </section>
    )
}