import React from "react"
import { useSelector } from "react-redux"
import { Loading } from "../components/Loading/Loading"
import { NotFoud } from "../components/NotFound/NotFoud"
import { Profile } from "../components/Profile/Profile"

export function User() {
    const { user, isError, isLoading } = useSelector((state) => state.profile)

    if (isLoading && !user.login) {
        return <Loading />
    }

    if (isError) {
        return <NotFoud />
    }

    return <Profile />
}
