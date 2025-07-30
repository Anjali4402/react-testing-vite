import { useState } from 'react'

const ChecboxChecked = () => {

    const [showMessage, setShowMessage] = useState(false)

    return (
        <div>
            <h1>Show Message When Checkbox is Checked</h1>

            <div>
                <label>
                    <input
                        type="checkbox"
                        data-testid='check-box'
                        checked={showMessage}
                        onChange={() => { setShowMessage(!showMessage) }}
                    />
                    Show Message
                </label>

                {
                    showMessage &&
                    <p
                        data-testid='message-box'
                    >Hello, world!</p>
                }


            </div>

        </div>
    )
}

export default ChecboxChecked