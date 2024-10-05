import Row1 from "./Components/Row1";
import Row2 from "./Components/Row2";
import AppName from "./Components/AppName";
import "./Todo.css";
import styles from './Name.module.css'
function App()
{
let todoItems=[
  {
 name:'buy milk',
  date :'02/09/2024',
  },

  {
    name:'go to college',
     date :'09/09/2024',
     },

     {
      name:'to take rest',
       date :'12/10/2024',
       },
];


  return <center className={styles.todoContainer}>

<AppName/><br />
<Row1/><br />
<Row2 todoI={todoItems}></Row2>

  </center>

}
export default App;