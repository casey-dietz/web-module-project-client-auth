import React, {useState} from 'react'
import { useHistory } from 'react-router'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Login = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        error: '',
    })
    const history = useHistory()
    
    const handleLogin = e => {
        e.preventDefault()
        axiosWithAuth()
            .post("/api/login", formState)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                history.push('./protected')
            })
            .catch(err => {
                console.log(err.response)
                setFormState({
                    error: err.response.data.error
                })
            })
    }

    const handleChange = e => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input 
                    type='text'
                    name='username'
                    value={formState.username}
                    onChange={handleChange}
                />
                <input 
                    type='password'
                    name='password'
                    value={formState.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
            <p style={{ color: 'red' }}>{formState.error}</p>
        </div>
    )
}

export default Login;