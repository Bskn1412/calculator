import styles from '../App.module.css';

function ButCount({onButtonClick}){

      const buttons = [
        'AC', '^', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '00', '='
    ];
    return(
       
        <div className = {styles.butCont}>
            {
                buttons.map((buttonName, index) => <button key = {buttonName} className={styles.button} onClick={() => onButtonClick(buttonName)} >{buttonName}</button>
                        
            )}
                    
        </div>
                
    )
}
export default ButCount