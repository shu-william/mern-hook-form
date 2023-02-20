import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confPassword}
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
    }

    return (
        <div>
            <form action="" className='form col-md-4 mx-auto' onSubmit={ createUser }>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">First Name:</label>
                    <input type="text" name="firstName" id="firstName" className='form-control' onChange={(e) => {setFirstName(e.target.value)}}/>
                    {
                        firstName.length < 2 && firstName.length > 0 ?
                        <p className='error'>First Name must be at least 2 characters.</p> :
                        <p></p>
                    }
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Last Name:</label>
                    <input type="text" name="lastName" id="lastName" className='form-control' onChange={(e) => {setLastName(e.target.value)}}/>
                    {
                        lastName.length < 2 && lastName.length > 0 ?
                        <p className='error'>Last Name must be at least 2 characters.</p> :
                        <p></p>
                    }
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Email:</label>
                    <input type="email" name="email" id="email" className='form-control' onChange={(e) => {setEmail(e.target.value)}}/>
                    {
                        email.length < 5 && email.length > 0 ?
                        <p className='error'>Email must be at least 5 characters.</p> :
                        <p></p>
                    }
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Password:</label>
                    <input type="password" name="password" id="password" className='form-control' onChange={(e) => {setPassword(e.target.value)}}/>
                    {
                        password.length < 8 && password.length > 0 ?
                        <p className='error'>Password must be at least 8 characters.</p> :
                        <p></p>
                    }
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Confirm Password:</label>
                    <input type="password" name="confPassword" id="confPassword" className='form-control' onChange={(e) => {setConfPassword(e.target.value)}}/>
                    {
                        password != confPassword && confPassword.length > 0 ?
                        <p className='error'>Passwords must match.</p> :
                        <p></p>
                    }
                </div>
                <input type="submit" value="Submit" className='btn btn-primary mt-3' />
            </form>
            <div className='my-3'>
                <h2>Your Form Data:</h2>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
            </div>
        </div>
    )
}

export default Form
