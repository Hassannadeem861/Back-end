import { React, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
// import axios from 'axios';
// import { json } from 'sequelize';

// const baseUrl = 'http://localhost:8080/api/v1/register'
const Signup = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })
    // console.log("user :", user);

    const navigate = useNavigate();
    const storeTokenInLS = useAuth();
    console.log("storeTokenInLS :", storeTokenInLS);


    const changeHandler = (e) => {
        // console.log("event: ", e);
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }


    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log("user value: ", user);

        try {
            const response = await fetch(`http://localhost:8080/api/v1/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            console.log("response :", response);
            if (response.ok) {
                const res_data = await response.json()
                console.log("response from the server", res_data);
                setUser({
                    username: '',
                    email: '',
                    password: ''
                })
                navigate('/login')
            }
        } catch (error) {
            console.log("register error", error);

        }
    }



    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "400px" }}>
            <form onSubmit={submitHandler}>
                <h2>Registration Form</h2>
                <label>
                    username:
                    <input
                        type="text"
                        name="username"
                        // value={formData.firstName}
                        // onChange={handleChange}
                        required
                        placeholder='Enter your username'
                        value={user.username}
                        onChange={changeHandler}
                    // ref={usernameInputRef}
                    />
                </label>
                <br />
                <label>
                    email:
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        // value={formData.lastName}
                        // onChange={handleChange}
                        required
                        value={user.email}
                        onChange={changeHandler}
                    // ref={emailInputRef}
                    />
                </label>
                <br />
                <label>
                    password:
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder='Enter your password'
                        value={user.password}
                        onChange={changeHandler}
                    // ref={passwordInputRef}
                    />
                </label>

                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Signup
