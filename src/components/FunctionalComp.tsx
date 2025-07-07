import React, { useState } from 'react';
import { handleOtherMethod } from '../helper';

const FunctionalComp = () => {

    const [ data, setData] = useState("")


  return (
    <div>
        <h1>Functional Component Method Testing</h1>
        <button data-testid='btn1' onClick={()=>setData('Hello')}  >Update</button>
        <button onClick={handleOtherMethod}  >Print</button>
        
        <h2>{data}</h2>
    </div>
  )
}

export default FunctionalComp