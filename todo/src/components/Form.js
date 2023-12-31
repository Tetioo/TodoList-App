import styles from "../style.module.css"


const Form=({todo, setTodo,todolist,setTodoList}) => { //accept props
    return (
        <div className={styles.todoform}>
            <form>
                <input className={styles.todoinput} placeholder="Add Todo Item"></input>
                <button className={styles.todobutton}> ADD</button>
            </form>
        </div>
    )
}
export default Form