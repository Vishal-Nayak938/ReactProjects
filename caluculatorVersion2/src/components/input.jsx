import { useContext } from 'react';
import Styles from './display.module.css'
import { logicStore } from '../Store/Store';

const Input = ()=>{
 
   let {currentState}=useContext(logicStore)

    return <>
    <input className={Styles.display} type="text" readOnly value={currentState}/>
    </>
}
export default Input;