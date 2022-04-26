import React, { useEffect, useState } from 'react'
import styles from "./Pages.module.css"
import { Pagination, PaginationItem } from '@mui/material'
import { Link as NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../../store/features/user/userSlice';

function Pages() {
    const { user, isError, isSucces, isLoading } = useSelector(state => state.profile)

    const [page, setPage] = useState(1)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRepos({ user: user.login, page: page }))
    }, [dispatch, page])

    return (
        <div>
            <Pagination
                count={10}
                onChange={(_, num) => setPage(num)}
                showFirstButton
                showLastButton
                sx={{ marginY: 3, marginX: "auto" }}
                renderItem={(item) => (
                    <PaginationItem
                        component={NavLink}
                        to={`/?page=${item.page}`}
                        {...item}
                    />
                )}
            />
        </div>
    )
}

export default Pages