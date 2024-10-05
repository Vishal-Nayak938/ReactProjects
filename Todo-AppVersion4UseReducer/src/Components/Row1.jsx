import { useState,useRef,useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import styles from './icon.module.css'
import { TodoItemsName } from "../store/todo-items-store";

function Row1()
{
let todoInputName=useRef();
let todoDateName=useRef();

const {addNewItem}=useContext(TodoItemsName);


const handleAddButtonClicked=(event)=>{
  event.preventDefault();

let inputName=todoInputName.current.value;
let dueDate=todoDateName.current.value;
todoDateName.current.value=""
todoInputName.current.value=""
addNewItem(inputName,dueDate)
}

return <form action="" onSubmit={handleAddButtonClicked}> 

<div className="row">
  
<div className="col-4">
<input type="text"  placeholder="enter TODO here"
ref={todoInputName}
style={{color:'white'}}  className={styles.inp}/>

</div>
<div className="col-4">
  <input type="date" ref={todoDateName}
 className={styles.inp} />
</div>
<div className="col-2">
<button  className="btn btn-success"><BiMessageAdd className={styles.icon}/></button>
</div>

</div>
</form>
}
export default Row1;