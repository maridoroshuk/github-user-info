import React from "react"
import { Pagination, PaginationItem } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link } from "react-router-dom"
import { fetchRepos, setPage } from "../../../../store/features/user/userSlice"
import styles from "./Pages.module.css"
import { useDispatch } from "react-redux"

const theme = createTheme({
    palette: {
        primary: {
            main: "#0064EB"
        }

    }
})

export function Pages({ user, page }) {

    const pagesCount = Math.ceil(user.public_repos / 4)
    const isReposQtyMoreFour = user.public_repos > 4

    const dispatch = useDispatch()
    const onPageChange = (_, selectedPage) => {
        dispatch(setPage(selectedPage))
        dispatch(fetchRepos({ user: user.login, page: selectedPage }))
    }

    return (
        <ThemeProvider theme={theme}>
            {isReposQtyMoreFour && (
                <div className={styles.wrapper}>
                    <Pagination
                        count={pagesCount}
                        shape="rounded"
                        color="primary"
                        page={page}
                        onChange={onPageChange}
                        sx={{ marginY: 3, marginX: "auto" }}
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to={`${item.page === 1 ? "" : `?page=${item.page}`}`}
                                {...item}
                            />
                        )}
                    />
                </div>
            )}
        </ThemeProvider>
    )
}
