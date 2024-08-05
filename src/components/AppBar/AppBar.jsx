import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
    const isLogedIn = useSelector(selectIsLoggedIn)
    return(
    <header className={css.header}>
            <Navigation />
            {isLogedIn ? <UserMenu/> : <AuthNav/>}
    </header>)
}