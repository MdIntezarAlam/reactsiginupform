import React, { useState } from 'react'
import { useEffect } from 'react';
import AccountValid from './AccountValid';

function CreateAccount({ submitForm}) {
    //All initial Values
    const [values, setSetvalues] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    })
    //  Error are initial set to an Empty object
    const [errors, setErrors] = useState({});
    const [dataisRight, setDataright] = useState(false)
    //Input Change Handler
    const handleChange = (event) => {
        setSetvalues({
            ...values,
            [event.target.name]: event.target.value,

        })
    }
    //OnSubmit Fir
    const formSubmit = (e) => {
        e.preventDefault();
        //Validation for submiting the Form
        setErrors(AccountValid(values));
        setDataright(true);
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataisRight) {
            submitForm(true);
        }
    }, [errors]);

    return (
        <div className="acc_container">
            <div className="acc-wrapper">
                <div>
                    <h2 className='heading'>Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className='label'>Your Name</label>
                        <input type="text" placeholder='Your Name' className='input' name='name' value={values.name} onChange={handleChange} />
                        {errors.name && <span className='error'>{errors.name}</span>}
                    </div>
                    <div className="email">
                        <label className='label'>Email (optional)</label>
                        <input type="text" placeholder='email' className='input' name='email' value={values.email} onChange={handleChange} />
                        {errors.email && <span className='error'>{errors.email}</span>}

                    </div>
                    <div className="password">
                        <label className='label'>Password</label>
                        <input type="password" placeholder='Atleast 6 character' className='input' name='password' value={values.password} onChange={handleChange} />
                        {errors.password && <span className='error'>{errors.password}</span>}
                        <span>Password must be at least 6 character</span>
                    </div>
                    <div className="mobile">
                        <label className='label'>Mobile number</label>
                        <input type="text" placeholder='mobile' className='input' name='mobile' value={values.mobile} onChange={handleChange} />
                        {errors.mobile && <span className='error'>{errors.mobile}</span>}

                    </div>
                    <span className='msg'>We will send you a text to verify your phone.
                        Message</span>
                    <div>
                        <button className='submit' onClick={formSubmit} >Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateAccount
