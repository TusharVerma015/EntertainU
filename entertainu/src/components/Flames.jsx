import React from 'react'
import { useState,useEffect } from 'react'

export const Flames = () => {
const [name1, setName1] = useState('')
const [name2, setName2] = useState('')
const handleClick = ()=>{
    let n1 = name1.toLowerCase();
    let n2 = name2.toLowerCase();

   
    for (let i = 0; i < n1.length; i++) {
        let char = n1.charAt(i).toLowerCase();
        if (n2.includes(char)) {
            n1 = n1.replace(char, '');
            n2 = n2.replace(char, '');
            i--; // adjust index after removal
        }
    }

    // Count remaining letters
    let count = n1.length + n2.length;
    console.log(count)
    // FLAMES calculation
    const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let index = 0;

    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    let result = '';
    switch (flames[0]) {
        case 'F':
            result = "Friends";
            break;
        case 'L':
            result = "Lovers";
            break;
        case 'A':
            result = "Affectionate";
            break;
        case 'M':
            result = "Marriage";
            break;
        case 'E':
            result = "Enemies";
            break;
        case 'S':
            result = "Siblings";
            break;
    }
    console.log(result);

}
  return (
    <>
    <div className="input-section">
        <input type="text" value={name1} placeholder='Enter your name' onChange={(e)=>setName1(e.target.value)}/>
        <input type="text" value={name2} placeholder="Enter partner's name" onChange={(e)=>setName2(e.target.value)} />
        <button type="submit" onClick={()=>handleClick()}>Find Compatibility</button>
    </div>
    <div className="flame-box">

    </div>
    
    </>
  )
}
