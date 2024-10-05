import styles from './cal.module.css'
import Input from './components/input.jsx'
import Butt from './components/butto.jsx'
const App = () =>{
let butt=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  return  <div id={styles.total}>
    <div id={styles.Calculator}>
<Input></Input>
<Butt butt={butt}></Butt>
</div>
    </div>
    
  
}

export default App
