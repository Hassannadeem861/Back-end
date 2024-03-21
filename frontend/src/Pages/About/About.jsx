import {React, useState} from 'react'
import { useAuth } from '../../store/auth'

const About = () => {

    const [data, setData] = useState(true)

    const { userData } = useAuth()
    console.log("userData: ", userData);

    if (data && userData) {
        setData({
            username: userData.username,
        })
        setData(false)
    }



    return (
        <div>
            <h1>Hello {userData.username}</h1>  
        </div>
    )
}

export default About
