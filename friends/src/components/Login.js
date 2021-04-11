import React, {useState} from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    handleChange = e => {
        setUsername({
            ...username,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input 
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
            <p style={{ color: 'red' }}>{error}</p>
        </div>
    )
}

export default Login;