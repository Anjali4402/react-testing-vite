import { useState } from 'react'

const SubmitDisabled = () => {

    const [text, setText] = useState('');

    return (
        <div>
            <h1>Disable Button When Input Is Empty</h1>

            <div>

                <input type="text"
                    onChange={(e) => { setText(e.target.value) }}
                    placeholder='Enter your text' />


                <button
                    disabled={text.length === 0}
                >Submit</button>

            </div>

        </div>
    )
}

export default SubmitDisabled