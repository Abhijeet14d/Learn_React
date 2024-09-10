import { useState } from "react";

function Counter(){

    let [Counter, setCounter] = useState(0)

  const addValue= () =>{
    if(Counter >= 20){
        Counter = 20;
        setCounter(Counter);
    }else{
        Counter += 1;
        setCounter(Counter)
    }
  }

  const removeValue=()=>{
    if(Counter <= 0){
        Counter = 0;
        setCounter(Counter);
    }else{
        Counter -=1;
        setCounter(Counter);
    }
    
  }

    return(
        <>
        <h3>Counter : {Counter}</h3>

          <button
            onClick={addValue}
          >Add Value</button><br/>
          <button onClick = {removeValue}>Remove Value</button>
        </>

    );
}

export default Counter;