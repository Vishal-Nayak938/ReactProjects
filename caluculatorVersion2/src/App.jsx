import styles from './cal.module.css'
import Input from './components/input.jsx'
import Butt from './components/butto.jsx'
import { useState } from 'react'
import EntireLogic, { logicStore } from './Store/Store.jsx'

const App = () =>{

return  <EntireLogic>

<div id={styles.total}>

    <div id={styles.Calculator}>
<Input></Input>
<Butt></Butt>

</div>
    </div>
    
    </EntireLogic>
  
}

export default App
