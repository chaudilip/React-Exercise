// create a button click counter , whenever use click on button counter values should be increased and updated value should br reflected as a button text
// implement same for the decrement button.


import React from 'react';
import { useState } from 'react';

function ExcerciseTwo(){
    let [counter,setCounter] = useState(0);
    function increased(){
        setCounter(counter=counter + 1);
    }
    function decremented(){
        setCounter(counter=counter-1);
    }
    return(
        <>
            <button onClick={increased}>+</button>
            {counter}
            <button onClick={decremented}>-</button>
        </>
    )
}
export default ExcerciseTwo;