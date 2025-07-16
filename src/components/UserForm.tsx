
import React, { useState } from 'react';

const UserForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { value, name } = event.target;

        setForm((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert('form submitted')
        console.log(form);
    }


    return (
        <div>

            <form action=""
                onSubmit={handleSubmit}
            >
                <input
                    data-testid="name-input"
                    type="text"
                    name='name'
                    placeholder='Enter Name'
                    value={form.name}
                    onChange={handleOnChange}
                />

                <br />
                <br />

                <input
                data-testid='email-input'
                 type="email" 
                name = 'email'
                placeholder='Enter Email'
                value= {form.email}
                onChange={handleOnChange}
                />

                <br />
                <br />

                <input 
                data-testid='password-input'
                type="text" 
                name='password'
                placeholder='Enter Password'
                value={form.password}
                onChange={handleOnChange}
                />

                <br />
                <br />


                   <input
                custom-testid='user-age'
                 type='number' 
                name = 'Age'
                placeholder='Enter Age'
                value= {54}
                onChange={handleOnChange}
                />


                <br />
                <br />

                

                
                <button
                type='submit'
                >Submitted</button>



            </form>


        </div>
    )


};

export default UserForm;