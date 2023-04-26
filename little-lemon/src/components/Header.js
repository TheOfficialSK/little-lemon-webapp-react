import logo from './assets/Logo.svg';
import Nav from "./Nav";
import "./Header.css";
function Header() {
    return (
        <header className={"header-section"}>
            <img className={"header-logo"}src={logo} alt="Little Lemon Logo" width={"200px"} height={"96px"}/>
            <Nav section={"top-bar"} links={
                [
                    {anchor: "HomePage", label: "Home"},
                    {anchor: "Chicago", label: "About"},
                    {anchor: "Specials", label: "Menu"},
                    {anchor: "BookingPage", label: "Reservations"},
                    {anchor: "??", label: "Order Online"},
                    {anchor: "??", label: "Login"}
                ]
            } />
        </header>
    )
}
export default Header;