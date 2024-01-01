import Todo from "./Todo"

const TodoList=({todolist})=>{
    return ( <div>
        {todolist.map((todoitem)=>(
            <Todo key ={todoitem.id} todoitem={todoitem}></Todo>
        ))}
      </div>
    );
  };
export default TodoList