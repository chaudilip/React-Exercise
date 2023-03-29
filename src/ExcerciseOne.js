//Create a functional component with useState which store following things.
// Name - text , Branch - number , Semester - number , Collage - text
// Put A button at the end , when user click on it . Display above data in proper format with the help of the <p> tag.

import React from "react";
import { useState } from "react";

function ExcerciseOne(){
    const [name,setName] = useState("");
    const [branch,setBranch] = useState("");
    const [semester,setSemester] = useState("");
    const [collage,setCollage] = useState("");
    const [allvalues,setAllValues] = useState("");
    function changeAll(){
        setAllValues(` Name : ${name} , branch : ${branch} , semester :  ${semester} , collage : ${collage}`)
    }
    return(
        <div>
            <input type="text" placeholder="Enter a Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <input type="text" placeholder="Enter a Branch" value={branch} onChange={(e) => setBranch(e.target.value)}/>
            <br/>
            <input type="number" placeholder="Enter a Semester" value={semester} onChange={(e) => setSemester(e.target.value)}/>
            <br/>
            <input type="text" placeholder="Enter a Collage" value={collage} onChange={(e) => setCollage(e.target.value)}/>
            <br/>
            <button onClick={changeAll}>Get Values</button>
            <br/>
            <p>{allvalues}</p>
        </div>
    )

}

export default ExcerciseOne;