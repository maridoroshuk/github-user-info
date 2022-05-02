import React from "react"
import { useSelector } from "react-redux"
import { Empty } from "../components/shared/Empty"

export function Error() {
    const { message } = useSelector((state) => state.profile)
    return (
	<Empty text={message} />
    )
}
