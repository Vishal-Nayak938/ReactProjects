import Row1 from "./Components/Row1";
import Row2 from "./Components/Row2";
import AppName from "./Components/AppName";
import "./Todo.css";
import styles from './Name.module.css'
import WelcomePage from "./Components/welcome";
import { useState } from "react";


function App()
{
let [currentValue,setCurrentValue]=useState([])
//   {
//     todoName:'buy milk',
//     todoTarik :'02/09/2024',
//   },

//   {
//     todoName:'go to college',
//     todoTarik :'09/09/2024',
//      },

//      {
//       todoName:'to take rest',
//       todoTarik :'12/10/2024',
//        },
// ]);

const handleOnNewItem =(itemName,itemDate)=>{

const newTodoItems=[...currentValue,{ todoName:itemName,todoTarik :itemDate},];
setCurrentValue(newTodoItems)
// console.log(`new item name  is  ${itemName} and date ${itemDate}`)
}

const handleDeleteButton=(name)=>{

let newCurrentValue=currentValue.filter(item => item.todoName !== name)
setCurrentValue(newCurrentValue);
console.log(`Deleted ${name}`)
}


  return <center className={styles.todoContainer}>

<AppName/><br />
<Row1 onNewItem={handleOnNewItem}/><br />
{currentValue.length===0 && <WelcomePage></WelcomePage> }
<Row2 todoI={currentValue} onDeleteButton={handleDeleteButton}></Row2>

  </center>

}
export default App;