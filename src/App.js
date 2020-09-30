import React,{useState} from "react";
import "./styles.css";
import Button from "./components/Button"

export default function App() {
const [number,setNumber] = useState("")
const [numberTwo,setNumberTwo] = useState("")
const [operators,setOperators] = useState("")

const handlePlus =(numberClick) =>{
     setNumber(number+numberClick)
}

const handleOperators =(operator) =>{
 setOperators(operator)
 setNumberTwo(number)
 setNumber("")
  
}

const handleEqual =() =>{
  switch(operators) { 
   
   case"+" :
     setNumber(parseInt(numberTwo) + parseInt(number))
     break;
  
  case"-" :
   setNumber(parseInt(numberTwo) - parseInt(number))
   break;
   case"*" :
    setNumber(parseInt(numberTwo) * parseInt(number))
    break;
    default :
    setNumber(parseInt(numberTwo) / parseInt(number))
    break;
  }
}

const handleReset = () =>{
setNumber("")
setNumberTwo("")
setOperators("")
}

  return (
    <div className="App">
     
     <div>
        <h3>{number}</h3>
     </div>

      <div>
        <Button onClick={() => handlePlus ("1") } >1</Button>
        <Button onClick={() => handlePlus ("2") }>2</Button>
        <Button onClick={() => handlePlus ("3") }>3</Button>
        <Button onClick={() => handleOperators ("+") }>+</Button>
      </div>

      <div>
        <Button onClick={() => handlePlus ("4") }>4</Button>
        <Button onClick={() => handlePlus ("5") }>5</Button>
        <Button onClick={() => handlePlus ("6") }>6</Button>
        <Button onClick={() => handleOperators ("-") }>-</Button>
      </div>
      <div>
        <Button onClick={() => handlePlus ("7") }>7</Button>
        <Button onClick={() => handlePlus ("8") }>8</Button>
        <Button onClick={() => handlePlus ("9") }>9</Button>
        <Button onClick={() => handleOperators ("*") }>*</Button>
      </div>

      <div>
        <Button onClick={() => handlePlus ("0") }>0</Button>
         <Button onClick={handleEqual}>=</Button>
        <Button onClick={() => handleOperators ("/") }>/</Button>
        <Button onClick={handleReset}>C</Button>
      </div>
    </div>
  );
}
