import React from 'react'
import { useSelector } from 'react-redux'
import SearchIcon from "../../assets/starting.png"
import Loading from '../Loading/Loading'
import Empty from '../shared/Empty'

function Starting() {
    const { isError, isLoading, message } = useSelector((state) => state.profile)

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <Empty text={message} />
    }

    return <Empty img={SearchIcon} alt="search icon" text="Start with searching a GitHub user" />
}

export default Starting