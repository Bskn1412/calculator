import { useState } from 'react'
import { useEffect } from 'react';
import {evaluate} from 'mathjs'
import styles from './App.module.css'
import ButCount from './components/ButCount'
import Input from './components/Input'
function App() {

  const [inp, setInp] = useState("")
  
  const onButtonClick = (buttonText)=> {
    try{
        if (buttonText === 'AC'){
              setInp("");
            }
            else if(buttonText === '='){
              setInp(evaluate(inp))
            }
            else if (buttonText === '^'){
              setInp(inp + '^')
            }
            else{
              const newValue = inp + buttonText;
              setInp(newValue);
            }
      }
      catch(err){
          setInp("Syntax Error", err);
      }
      
  }

  useEffect(() => {
  const handleKeyDown = (event) => {
    const key = event.key;
    const allowedKeys = ['0', '1','2','3','4','5','6','7','8','9',
                         '+','-','*','/','(',')','%','.','Enter','Backspace','Delete','^'];

    if (allowedKeys.includes(key)) {
      if (key === 'Enter') {
        onButtonClick('=');
      } else if (key === 'Backspace') {
        setInp((prev) => prev.slice(0, -1));
      } else {
        onButtonClick(key);
      }
    }

    if (key === 'Escape') {
      onButtonClick('AC');
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [onButtonClick]);

  return (
    <>
    <h1>Calculator</h1>
    <div className={styles.calculater}>
      <Input Inputvalue = {inp}></Input>
      <ButCount onButtonClick={onButtonClick}></ButCount>
    </div>
    </>
  )
}

export default App
