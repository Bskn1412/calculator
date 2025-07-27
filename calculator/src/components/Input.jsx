import styles from '../App.module.css'
function Input({Inputvalue}){
    return(
           
        <input className={styles.input} type = 'text' value = {Inputvalue} readOnly/>
        
    )
}
export default Input