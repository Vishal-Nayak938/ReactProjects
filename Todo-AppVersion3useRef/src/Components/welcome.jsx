import styles from'./welcome.module.css'
import { useContext } from 'react' 
import { TodoItemsName } from '../store/todo-items-store'

const WelcomePage=()=>{

    const contextObject=useContext(TodoItemsName);

    const TodoFromContext=contextObject.item;
    
return <>
{ TodoFromContext.length===0 &&  <p className={styles.enjoy}>enjoy the day</p>}
</>
}
export default WelcomePage