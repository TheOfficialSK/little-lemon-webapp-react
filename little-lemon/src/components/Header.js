import logo from './assets/Logo.svg';
import Nav from "./Nav";
import './Header.css';
function Header() {
    return (
        <header className={"header-section"}>
            <img className={"header-logo"}src={logo} alt="Little Lemon Logo" width={"200px"} height={"96px"}/>
            <Nav section={"top-bar"} links={
                [
                    ["Home", "https://www.google.com/"],
                    ["About", "https://www.google.com/"],
                    ["Menu", "https://www.google.com/"],
                    ["reservations", "https://www.google.com/"],
                    ["Order Online", "https://www.google.com/"],
                    ["Login", "https://www.reddit.com/"]
                ]
            } />
        </header>
    )
}
export default Header;