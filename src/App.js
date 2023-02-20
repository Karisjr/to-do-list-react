import React from 'react';
import './App.css';
import AddItem from './Components/AddItems';
import ToDoItems from './Components/TodoItems';
import {nanoid} from "nanoid"

function App() {

  const todoList = [
    {id: 1,
    title: "Learn React",
    done: true},
  ]
  const [notes, setNotes] = React.useState(todoList)

  function addNewTodo(input) {
    console.log("adding new todo")

    let newTodo = {id: nanoid(), title: input, done: false}
    setNotes(prevNotes => [...prevNotes, newTodo])
  }

  function deleteTodo(idToDelete) {
    console.log("delete ", idToDelete)
    setNotes(allTodos => allTodos.filter(todo => todo.id !== idToDelete))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <section className="To-do-container">
        <AddItem 
            addNewNote = {addNewTodo}
          />
        {/* <ToDoItems /> */}
        {notes.map((todo)=>
          <ToDoItems
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo} />
        )}
      </section>
    </div>
  );
}

export default App;
