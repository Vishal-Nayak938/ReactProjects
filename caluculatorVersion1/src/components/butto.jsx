
import styles from './button.module.css'

const Butt = ({butt}) =>{
    return <>

    <div  className={styles.buttoncontainer}>
{butt.map((items) => <input className={styles.button}  type="button" value={items}/>)}
</div>
    
    </>
}

export default Butt;