import { React, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

const Contact = () => {
    // const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        message: ''
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

    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log("user value: ", user);

        try {
            const contactResponse = await fetch(`http://localhost:8080/api/v1/contact`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            console.log("contactResponse :", contactResponse);
            if (contactResponse.ok) {
                setUser({
                    username: '',
                    email: '',
                    message: ''
                })
                // navigate('/login')
            }
        } catch (error) {
            console.log("contact error", error);

        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "400px" }}>
            <form onSubmit={submitHandler}>
                <h2>Contact Form</h2>
                <label>
                    username:
                    <input
                        type="text"
                        name="username"
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
                        required
                        value={user.email}
                        onChange={changeHandler}
                    // ref={emailInputRef}
                    />
                </label>
                <br />
                <label>
                    message:
                    <textarea type="message"
                        name="message"
                        required
                        placeholder='Enter your password'
                        value={user.password}
                        onChange={changeHandler}></textarea>
                </label>

                <br />
                <button type="submit">Contact</button>
            </form>
        </div>
    )
}

export default Contact
