// import React from 'react'

import InputBox from "./components/InputBox"

const App = () => {
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
    </div>
  )
}

export default App