import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from "../assets/starting.png"
import Loading from '../components/Loading/Loading'
import Empty from '../components/shared/Empty'
import { reset } from '../store/features/user/userSlice'

function Starting() {
    const { user, isError, isLoading, message } = useSelector((state) => state.profile)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <Empty text={message} />
    }

    return <>
        {!user.login && < Empty img={SearchIcon} alt="search icon" text="Start with searching a GitHub user" />}
    </>
}

export default Starting