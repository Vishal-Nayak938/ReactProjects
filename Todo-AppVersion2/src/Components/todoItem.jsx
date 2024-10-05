import { MdDelete } from "react-icons/md";
import styles from './icon.module.css'
function TodoItem({todoName,todoDate, deleteClick})
{



    return <>
     <div className="row">

    <div className="col-4" >   {todoName}  </div>
    <div className="col-4"> {todoDate} </div>
    <div className="col-2">
        
    <button type="button" className={`btn btn-dark `} onClick={()=>deleteClick(todoName)}>
        <MdDelete className={styles.icon}/>
    </button>
   </div>
   </div>
    </>
}
export default TodoItem;