import React, { useState } from 'react';




const MultiStepForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [step, setStep] = useState(1);

    const [formSubmit, setFormSubmit] = useState(false)

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((preval) => {

            return {
                ...preval,
                [name]: value
            }
        })
    };


    const handleNext = () => {
        setErrorMessage((preError) => {
            return {
                ...preError,
                name: "",
                email: ""
            }
        })


        if (!formData?.name) {
            setErrorMessage((preError) => {
                return {
                    ...preError,
                    name: "Name is Required"
                }
            })
        }
        // else if (!formData?.email.includes('@')) {
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setErrorMessage((preError) => {
                return {
                    ...preError,
                    email: "Email is invalid"
                }
            })
        }
        else {
            setStep(step + 1)
        }

    };


    const handleSubmit = () => {

        setErrorMessage((preError) => {
            return {
                ...preError,
                password: "",
                confirmPassword: ""
            }
        })

        if (formData.password.length < 6) {
            setErrorMessage((preError) => {
                return {
                    ...preError,
                    password: "Password must be at least 6 characters"
                }
            });
            return;
        }
        if (formData.password !== formData?.confirmPassword) {
            setErrorMessage((preError) => {
                return {
                    ...preError,
                    confirmPassword: "Passwords do not match"
                }
            })
            return;
        }

        setFormSubmit(true)
    }



    return (
        <div>
            <h1>Multi Step Form</h1>


            <div>
                {
                    step === 1 ?
                        <div>
                            <input type='name'
                                name='name'
                                onChange={handleOnchange}
                                value={formData.name}
                                aria-label="name"
                                placeholder='Enter Name'
                            />
                            {errorMessage.name && <p>{errorMessage.name}</p>}

                            <br /> <br />


                            <input type='email'
                                name='email'
                                onChange={handleOnchange}
                                value={formData.email}
                                aria-label="email"
                                placeholder='Enter Email'
                            />
                            {errorMessage.email && <p>{errorMessage.email}</p>}

                        </div>
                        :

                        <div>
                            <input type='password'
                                name='password'
                                onChange={handleOnchange}
                                value={formData.password}
                                aria-label='password'
                                placeholder='Enter Password'
                            />
                            {errorMessage.password && <p>{errorMessage?.password}</p>}

                            <br /> <br />


                            <input type='password'
                                name='confirmPassword'
                                onChange={handleOnchange}
                                value={formData.confirmPassword}
                                aria-label='confirmPassword'
                                placeholder='Enter Confirm Password'
                            />
                            {errorMessage.confirmPassword && <p>{errorMessage.confirmPassword}</p>}

                        </div>
                }
            </div>






            <div>
                {
                    step === 1 ? (
                        <button
                            disabled={!formData.name || !formData.email}  //{formData?.name && formData?.email ? false : true}
                            onClick={handleNext}
                        >Next</button>
                    )
                        :
                        <button
                            disabled={!formData.password || !formData.confirmPassword} // {formData?.password && formData?.confirmPassword ? false : true}
                            onClick={handleSubmit}
                        >Submit</button>
                }
            </div>


            <div>
                {formSubmit && <p>Signup Complete</p>}
            </div>


        </div>
    )
}

export default MultiStepForm