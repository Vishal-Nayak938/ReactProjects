import styles from'./welcome.module.css'
import { useContext } from 'react' 
import { TodoItemsName } from '../store/todo-items-store'

const WelcomePage=()=>{

    const {item}=useContext(TodoItemsName);
    
return <>
{ item.length===0 &&  <p className={styles.enjoy}>enjoy the day</p>}
</>
}
export default WelcomePage