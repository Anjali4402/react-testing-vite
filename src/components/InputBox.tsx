import React, { useState } from 'react'

const InputBox = () => {

    const [data, setData] = useState('');

    return (
        <div>InputBox

            <h2>Test OnChange Event with Input Text</h2>


            <input type="text"
                value={data}
                onChange={(e) => { setData(e.target.value + 'test') }}
            />


        </div>
    )
}

export default InputBox