import React from "react"
const todos = [
  "Finish homework",
  "Clean Room",
  "Wash Dishes",
  "Cook Food",
  "Write Code",
]

const Todo = (props) => <li>{props.todo}</li>

const TodoList = () => (
  <ul>
    {todos.map((todo) => (
      <Todo todo={todo} key={todo} />
    ))}
  </ul>
)

export default TodoList
