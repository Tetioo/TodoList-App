import Todo from "./Todo"

const TodoList=({todolist})=>{
    return ( <div>
        {todolist.map((todoitem,index)=>(
            <div key={index}>
            <Todo todoitem={todoitem} />
            <br />
          </div>
        ))}
      </div>
    );
  };
export default TodoList