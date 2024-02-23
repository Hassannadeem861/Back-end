import { React, useState } from 'react'

const Signup = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })
    // console.log("user :", user);

    const changeHandler = (e) => {
        // console.log("event: ", e);
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("user value: ", user);
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

                    />
                </label>

                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Signup
