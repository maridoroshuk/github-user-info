import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading/Loading'
import Profile from '../components/Profile/Profile'
import Empty from '../components/shared/Empty'

function User() {
    const { user, isError, isSucces, isLoading, message } = useSelector((state) => state.profile)

    // if (isLoading) {
    //     return <Loading />
    // }

    // if (isError) {
    //     return <Empty text={message} />
    // }

    return <Profile />
}

export default User