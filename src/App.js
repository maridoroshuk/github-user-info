import { useSelector } from "react-redux"
import Loading from "./components/Loading/Loading"
import Navbar from "./components/Navigation/Navbar"
import NotFoud from "./components/NotFound/NotFoud"
import Profile from "./components/Profile/Profile"
import Starting from "./components/Starting/Starting"

function App() {
  const { user, isError, isSucces, isLoading } = useSelector(
    (state) => state.profile
  )

  return (
    <div>
      <Navbar />
      {!user.login && !isError && !isLoading && <Starting />}
      {isSucces && !isError && <Profile />}
      {isError && <NotFoud />}
      {isLoading && !isError && !user.login && <Loading />}
    </div>
  )
}

export default App
