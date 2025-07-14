import React, { useState } from 'react'

const InputBox = () => {

    const [data, setData] = useState('');

    return (
        <div>InputBox

            <h2>Test OnChange Event with Input Text</h2>

            <label htmlFor="test">Test Label</label>
            <input type="text"
                id='test'
                data-testid = 'test'
                value={data}
                placeholder='Enter Test Label'
                onChange={(e) => { setData(e.target.value + 'test') }}
            />


            <label htmlFor="agree">Are You Agree</label>
            <input id='agree' type='checkbox'
                defaultChecked={true}  // by default is wil checked unless it will give error
            />


            {/* Different user name here */}
            <label htmlFor="user-name1">UserName</label>
            <input type="text" id='user-name1' placeholder='Enter Username' defaultValue={'John'} />

            <br />

            <label htmlFor="user-name2">UserName</label>
            <input type="text" id='user-name2' placeholder='Enter Username' defaultValue={'John'}   />

            <br />

            <label htmlFor="user-name3">UserName</label>
            <input type="text" id='user-name3' placeholder='Enter Username' defaultValue={'John'}  />
            
            <br />


        </div>
    )
}

export default InputBox