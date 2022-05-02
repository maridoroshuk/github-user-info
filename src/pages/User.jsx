import React from "react"
import { useSelector } from "react-redux"
import { Loading } from "../components/Loading/Loading"
import { NotFoud } from "../components/NotFound/NotFoud"
import { Profile } from "../components/Profile/Profile"

export function User() {
    const { state } = useSelector((state) => state.profile)

    if (state === "loading") {
        return <Loading />
    }

    if (state === "error") {
        return <NotFoud />
    }

    return <Profile />
}
