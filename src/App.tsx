// import React from 'react'

import { useState } from "react"
import InputBox from "./components/InputBox"
import SnapshotTesting from "./components/SnapshotTesting";
import Users from "./components/Users";
import FunctionalComp from "./components/FunctionalComp";
import UserForm from "./components/UserForm";
import APICall from "./components/APICall";
import ButtonClickCounter from "./components/ButtonClickCounter";
import CheckboxToggleMessage from "./components/CheckboxToggleMessage";
import LoginForm from "./components/LoginForm";
import './App.css'
import SignupForm from "./components/SignupForm";
import MultiStepForm from "./components/MultiStepForm";
import TodoBox from "./components/TodoBox";

const App = () => {

  const [data, setData] = useState('');

  return (
    <div>
      <h1>Hello world! My first test CASE.</h1>

      <h1>ToDo box</h1>
      <TodoBox />


      <h2>Multi step form</h2>
      <MultiStepForm />

      <h2>Multi Feature Form</h2>
      <SignupForm />
      
      
      <h2>Problem 8: Multi-Feature Form Component</h2>
      <LoginForm />



      <CheckboxToggleMessage />

      <ButtonClickCounter />


      <APICall />


<h2>User Form</h2>
      {/* User form started */}
      <UserForm />

      {/* User form end */}

      <h2>Normal input box</h2>
      
      <InputBox />




      <input type="text" 
      placeholder="Enter User Name"
      name = 'username'
      />

      <img 
      title="kasandbox Image"
      src="https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png" />


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