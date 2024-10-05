import { MdDelete } from "react-icons/md";
import styles from './icon.module.css'
import { useContext } from "react";
import { TodoItemsName } from "../store/todo-items-store";
function TodoItem({todoName,todoDate})
{


const {deleteItem}=useContext(TodoItemsName)

    return <>
     <div className="row">

    <div className="col-4" >   {todoName}  </div>
    <div className="col-4"> {todoDate} </div>
    <div className="col-2">
        
    <button type="button" className={`btn btn-dark `} onClick={()=>deleteItem(todoName)}>
        <MdDelete className={styles.icon}/>
    </button>
   </div>
   </div>
    </>
}
export default TodoItem;