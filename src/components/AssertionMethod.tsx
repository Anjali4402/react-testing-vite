import React from 'react'

const AssertionMethod = () => {
  return (
    <div>
        <h1>Assertion Method</h1>


        <input type="text" 
        defaultValue={'John Doe'}
        name='userName'
        className='test-style'
        // disabled
        id='user-name'
        data-test = 'test-user-name'
        />

        <button 
        className='btn1'
        title='button-here'
         >Submit Here</button>


    </div>
  )
}

export default AssertionMethod