import React from 'react';
import { useState } from 'react';

function EventHandle(){
    const [text1,setText1] = useState("");
    const [text2,setText2] = useState("");
    const [text3,setText3] = useState("");
    function changeValue(){
        setText3(text1 + " "  + text2);
    }
    return(
        <>
            <input type='text'
            value={text1}
            onChange={(e) => setText1(e.target.value)} />
            {text1}
            <input type='number'
            value={text2}
            onChange={(e) => setText2(e.target.value)} />
            {text2}
            <button onClick={changeValue}>Concatenation</button>
            {text3}
        </>
    )
}
export default EventHandle;