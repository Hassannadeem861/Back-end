import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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


  const submitHandler = async (e) => {
    e.preventDefault()
    // console.log("user value: ", user);

    try {
      const loginResponse = await fetch(`http://localhost:8080/api/v1/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      console.log("loginResponse :", loginResponse);
      if (loginResponse.ok) {
        const res_data = await loginResponse.json()
        console.log("response from the server: ", res_data);
        setUser({
          email: '',
          password: ''
        })
        navigate('/')
      }


    } catch (error) {

    }



  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "400px" }}>
        <form onSubmit={submitHandler}>
          <h2>Login Form</h2>
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
          <button type="submit">Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login
