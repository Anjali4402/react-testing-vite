import { useState } from 'react'

const TestInputMirror = () => {

  const [text, setText] = useState('');

  return (
    <div>
      <h1>Text Input Mirror</h1>


      <input 
      type='text'
      placeholder="Type something..."
        onChange={(e) => { setText(e.target.value) }}
      />

      <p>You Typed: {text} </p>




    </div>
  )
}

export default TestInputMirror