import styles from "../style.module.css"
import { useState } from "react";
import shortid from 'shortid'

const Form = ({ setTodoList }) => { // Remove unnecessary props
    const [todo, setTodo] = useState(""); //accept props

    const handleChange=(event)=>{
        setTodo(event.target.value) //capture value inside todo and add it to the todolist when submitting
        //console.log(todo)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList((prevTodoList) => [...prevTodoList, {name: todo, id: shortid.generate() }]); // Append todo to existing todolist
        setTodo(""); // Clear input field after submission
        //console.log(todolist)
      };
    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input value ={todo} onChange={handleChange} className={styles.todoinput} placeholder="Add Todo Item"></input>
                <button type="submit" className={styles.todobutton}> ADD</button>
            </form>
        </div>
    )
}
export default Form