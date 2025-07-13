import React, { useState } from 'react'

const InputBox = () => {

    const [data, setData] = useState('');

    return (
        <div>InputBox

            <h2>Test OnChange Event with Input Text</h2>

            <label htmlFor="test">Test Label</label>
            <input type="text"
            id='test'
                value={data}
                onChange={(e) => { setData(e.target.value + 'test') }}
            />


            <label htmlFor="agree">Are You Agree</label>
            <input id='agree' type='checkbox'
             defaultChecked={true}  // by default is wil checked unless it will give error
            />


        </div>
    )
}

export default InputBox