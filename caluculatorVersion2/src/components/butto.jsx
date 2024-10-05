
import { useContext } from 'react';
import styles from './button.module.css'
import { logicStore } from '../Store/Store';

const Butt = () =>{
 
       let {butt,onClickBehaviour}=useContext(logicStore)

    return <>

    <div  className={styles.buttoncontainer}>
{butt.map((items) => <input className={styles.button}  type="button" key={items} value={items}

onClick={()=>onClickBehaviour(items)}

/>)}
</div>
    
    </>
}

export default Butt;