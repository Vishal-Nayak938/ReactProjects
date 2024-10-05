import Row1 from "./Components/Row1";
import Row2 from "./Components/Row2";
import AppName from "./Components/AppName";
import "./Todo.css";
import styles from './Name.module.css'
import WelcomePage from "./Components/welcome";
import { useState } from "react";
import { TodoItemsName } from "./store/todo-items-store";

function App()
{
let [currentValue,setCurrentValue]=useState([])

const addNewItem =(itemName,itemDate)=>{
setCurrentValue((currValue)=>[...currValue,{ todoName:itemName,todoTarik :itemDate}])
}

const deleteItem=(name)=>{

let newCurrentValue=currentValue.filter(item => item.todoName !== name)
setCurrentValue(newCurrentValue);
}

const objectValue=[{todoName:"vishal",todoTarik :"Today"}]


  return (
  <TodoItemsName.Provider value={{
    item:currentValue,
    addNewItem:addNewItem,
    deleteItem:deleteItem,
    }} >

  <center className={styles.todoContainer}>
<AppName/><br />
<Row1 /><br />
 <WelcomePage  ></WelcomePage>
<Row2 ></Row2>
  </center>

  </TodoItemsName.Provider>
  );
}
export default App;