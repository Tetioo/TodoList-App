import styles from "../style.module.css"


const Form=({todo, setTodo,todolist,setTodoList}) => { //accept props
    const handleChange=(event)=>{
        setTodo(event.target.value) //capture value inside todo and add it to the todolist when submitting
        console.log(todo)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setTodoList([[...todolist,todo]]) //get initial items first and add to the array then add new items(todo)
        console.log(todolist)
    }
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