import { useSelector } from "react-redux"
import Navbar from "./components/Navigation/Navbar"
import NotFoud from "./components/NotFound/NotFoud"
import Profile from "./components/Profile/Profile"
import Starting from "./components/Starting/Starting"

function App() {
  const { user, isError, isSucces, isLoading } = useSelector(
    (state) => state.profile
  )

  console.log(isSucces)

  return (
    <div>
      <Navbar />
      {!user.login && !isError && <Starting />}
      {isSucces && <Profile />}
      {isError && <NotFoud />}
    </div>
  )
}

export default App
