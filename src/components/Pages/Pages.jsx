import React, { useEffect, useState } from 'react'
import styles from "./Pages.module.css"
import { Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../../store/features/user/userSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
                />
            </div>
            }
        </ThemeProvider>)
}

export default Pages