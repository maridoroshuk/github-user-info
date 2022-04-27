import React from 'react'
import Empty from '../shared/Empty'
import User from '../../assets/user.png'

function NotFoud() {
    return <Empty img={User} alt="user icon" text="User not found" />
}

export default NotFoud