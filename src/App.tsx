// import React from 'react'

import { useState } from "react"
import InputBox from "./components/InputBox"
import SnapshotTesting from "./components/SnapshotTesting";
import Users from "./components/Users";
import FunctionalComp from "./components/FunctionalComp";

const App = () => {

  const [data, setData] = useState('');

  return (
    <div>
      <h1>Hello world! My first test CASE.</h1>

      <input type="text" 
      placeholder="Enter User Name"
      name = 'username'
      />

      <img 
      title="kasandbox Image"
      src="https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png" />

      <InputBox />

      <button
      onClick={()=>{setData('updated data')}}
      >
        Update data
      </button>
      <h1>{data}</h1>


      <SnapshotTesting />

      <Users name = 'Kavita' />

      <FunctionalComp />


    </div>
  )
}

export default App