import React, { useState } from 'react'
import './styles.css';

const Form = () => {

    const [data, setData] = useState(
        {
            username: '',
            password: '',
        }
    )
    const { username, password } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
        // if (username == "") {
        //     console.log('cannot be empty')
        // }
        // else {
        //     console.log('ok')
        // }
    }

    const [visible, invisible] = useState(false);

    const passwordToggle = (e) => {
        e.preventDefault()
        invisible(show => !show)
        console.log(visible)
    }

    const [signUpBtn, signInBtn] = useState("Don't have an acc? Sign Up")


    const switchForm = (e) => {
        e.preventDefault()
        signInBtn("Already have an account? Sign In")
    }

    return (
        <form className={"form"} onSubmit={handleSubmit}>

            <h2 className={"heading"}>Sign in to your account</h2>

            <p className={"usernameText"}>User Name</p>

            <div className={"userEmail"}>
                <input
                    type="email" name="username"
                    placeholder="enter email address"
                    value={username}
                    onChange={handleChange}>
                </input>
            </div>
            <p className={"passwordText"}>Password</p>

            <div className={"password"}>
                <input type={visible ? "text" : "password"} name="password" placeholder="enter password" value={password} onChange={handleChange} ></input>
                <button onClick={passwordToggle} >show</button>
            </div>

            <button className={"btn"}> Sign In</button>

            <a className={"switchform"} onClick={switchForm}>
                 {signUpBtn}
            </a>

        </form>
    )
}

export default Form
