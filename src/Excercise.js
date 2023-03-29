// table of 20 , input field , button
import React from "react";
import { useState } from "react";

function ExcerciseThree(){
    const [num,setNum] = useState(0);
    let [mulSum,setMulSum] = useState();
    function mulTable(){
        let table ="";
      for(var i=1;i<=10;i++){  
            table += `  ${num} * ${i} = ${num*i} \n`;  
            setMulSum(table);
      }


    }
    return(
        <div>
            <input 
            value={num}
            onChange={(e) => setNum(e.target.value)}
            type="number" />
            <br/>
            <button onClick={mulTable} >Table Generator</button>
            <pre>
            {mulSum}
            </pre>
        </div>
    )
}

export default ExcerciseThree;