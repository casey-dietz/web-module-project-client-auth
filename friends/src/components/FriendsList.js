import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([])
    
    axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res.data)
        })

    return (
        <div>

        </div>
    )
}

export default FriendsList