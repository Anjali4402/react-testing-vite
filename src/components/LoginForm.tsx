
import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState("");


    const handleSubmit = () => {

        setErrorMessage("");
        setSuccessMessage("");

        if (!email.includes('@')) {
            setErrorMessage("Your email is not including @")
        }
        else if (password.length < 6) {
            setErrorMessage("Password must contain 6 character")
        } else {
            setSuccessMessage("Form submtted successfully!")
        }
    }


    return (
        <div className='container'>
            <h2>Login form</h2>

            <div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' placeholder='Enter you Email'
                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>

                <br />

                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password'
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <br />


                {errorMessage && <span className='show-error' >{errorMessage}</span>}
                {successMessage && <span className='show-success' >{successMessage}</span>}

                <br />
                <br />





                <button
                    onClick={handleSubmit}
                    disabled={email && password ? false : true}
                >Submit</button>

            </div>

        </div>
    )
}

export default LoginForm