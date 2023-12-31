import Form from "./components/Form";
import Header from "./components/Header"; 
import { useState } from "react";
import Todo from "./components/Todo";

function App() { //to be accessed by any file
  const [todo,setTodo] =useState(' ')
  const[todolist,setTodoList]= useState([])
  return (
    <div className="App">
      <Header></Header>
      <Form 
      todo = {todo} 
      setTodo={setTodo} 
      todolist={todolist}
      setTodoList={setTodoList}>
      </Form>
      <Todo></Todo>
    </div>
  );
}

export default App;
