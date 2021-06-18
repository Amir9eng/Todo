import "./App.css"
import TodoList from "./components/todoList"
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoList />
      <Form />
    </div>
  )
}

export default App
