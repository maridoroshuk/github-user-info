import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchIcon from "../assets/starting.png"
import { Loading } from "../components/Loading/Loading"
import { Empty } from "../components/shared/Empty"
import { reset } from "../store/features/user/userSlice"

export function Starting() {
	const { state, message } = useSelector((state) => state.profile)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(reset())
	}, [dispatch])

	if (state === "loading") {
		return <Loading />
	}

	if (state === "error") {
		return <Empty text={message} />
	}

	return (
		<Empty img={SearchIcon} alt="search icon" text="Start with searching a GitHub user" />
	)
}
