import { useDispatch } from "react-redux"
import { setCurrentUser } from "../../features/currentUser.slice"
import { useLocation } from "react-router-dom"

export const ValidSignup = () => {
    const url = useLocation().pathname.split("token/")[1]
    const dispatch = useDispatch()
    try {
        dispatch(setCurrentUser(url, "verify"))
        .then(() => window.location = "/")
    } catch (error) {
        console.log(error)
    }
}
