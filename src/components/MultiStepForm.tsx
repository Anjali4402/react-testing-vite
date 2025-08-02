import React, { useState } from 'react';




const MultiStepForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errorMesssage, setErrorMessage] = useState({
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
        } else if (!formData?.email.includes('@')) {
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
            })
        }
        if (formData.password !== formData?.confirmPassword) {
            setErrorMessage((preError) => {
                return {
                    ...preError,
                    confirmPassword: "Passwords do not match"
                }
            })
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
                                placeholder='Enter Name'
                            />
                            {errorMesssage.name && <p>{errorMesssage.name}</p>}

                            <br /> <br />


                            <input type='email'
                                name='email'
                                onChange={handleOnchange}
                                value={formData.email}
                                placeholder='Enter Email'
                            />
                            {errorMesssage.email && <p>{errorMesssage.email}</p>}

                        </div>
                        :

                        <div>
                            <input type='password'
                                name='password'
                                onChange={handleOnchange}
                                value={formData.password}
                                placeholder='Enter Password'
                            />
                            {errorMesssage.password && <p>{errorMesssage?.password}</p>}

                            <br /> <br />


                            <input type='password'
                                name='confirmPassword'
                                onChange={handleOnchange}
                                value={formData.confirmPassword}
                                placeholder='Enter Confirm Password'
                            />
                            {errorMesssage.confirmPassword && <p>{errorMesssage.confirmPassword}</p>}

                        </div>
                }
            </div>






            <div>
                {
                    step === 1 ? (
                        <button
                            disabled={formData?.name && formData?.email ? false : true}
                            onClick={handleNext}
                        >Next</button>
                    )
                        :
                        <button
                            disabled={formData?.password && formData?.confirmPassword ? false : true}
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