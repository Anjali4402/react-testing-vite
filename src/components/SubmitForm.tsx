

import { useState } from 'react'

const SubmitForm = () => {

    const [name, setName] = useState('');

    return (
        <div>
            <h2>Disable Submit Button When Input is Empty</h2>

            <div>

                <input
                    placeholder="Enter your name"
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <button
                    disabled={!name}
                >Submit</button>

            </div>

        </div>
    )
}

export default SubmitForm