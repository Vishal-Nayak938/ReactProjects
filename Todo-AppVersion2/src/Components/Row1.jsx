import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import styles from './icon.module.css'

function Row1({onNewItem})
{

const [inputName,setInputName]=useState("");

const [dueDate,setDueDate]=useState("");

function itemlist(event)
{
  setInputName(event.target.value)
}

const dueDateOnTime=(event)=>{
setDueDate(event.target.value)
}

const handleAddButtonClicked=(event)=>{
  event.preventDefault();
  onNewItem(inputName,dueDate)
setDueDate("")
setInputName("")
}

return <form action="" onSubmit={handleAddButtonClicked}> 

<div className="row">
  
<div className="col-4">
<input type="text" value={inputName} placeholder="enter TODO here" style={{color:'white'}} onChange={itemlist}  className={styles.inp}/>

</div>
<div className="col-4">
  <input type="date" value={dueDate} onChange={dueDateOnTime} className={styles.inp} />
</div>
<div className="col-2">
<button  className="btn btn-success"><BiMessageAdd className={styles.icon}/></button>
</div>

</div>
</form>
}
export default Row1;