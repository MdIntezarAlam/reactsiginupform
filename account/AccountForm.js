import React, { useState } from 'react'
import CreateAccount from './CreateAccount';
import AccountComplete from './AccountComplete'

function AccountForm() {
    const [formSubmit, setSubmit] = useState(false);
    //using props
    const submitForm = () => {
        setSubmit(true);
    }
    return (
        <div> {!formSubmit ? <CreateAccount submitForm={submitForm} /> : <AccountComplete/>}</div>
    );
}
export default AccountForm
