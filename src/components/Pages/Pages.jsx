import React, { useEffect, useState } from 'react'
import styles from "./Pages.module.css"
import { Pagination, PaginationItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../../store/features/user/userSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: "#0064EB",
        },

    },
});

function Pages() {
    const { user } = useSelector(state => state.profile)
    const pagesCount = Math.ceil(user.public_repos / 4)
    const isReposQtyMoreFour = user.public_repos > 4 ? true : false


    const [page, setPage] = useState(1)



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRepos({ user: user.login, page: page }))
    }, [dispatch, page])

    return (
        <ThemeProvider theme={theme}>
            {isReposQtyMoreFour && <div className={styles.wrapper}>
                <Pagination
                    count={pagesCount}
                    shape="rounded"
                    color="primary"
                    onChange={(_, num) => setPage(num)}
                    sx={{ marginY: 3, marginX: "auto" }}
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`${item.page === 1 ? '' : `?page=${item.page}`}`}
                            {...item}
                        />
                    )}
                />
            </div>
            }
        </ThemeProvider>)
}

export default Pages