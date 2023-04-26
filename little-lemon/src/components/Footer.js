import logo from "./assets/Logo.svg";
import Nav from "./Nav";
import "./Footer.css";
function Footer() {
    return (
        <footer>
            <img className={"header-logo"}src={logo} alt="Little Lemon Logo" width={"200px"} height={"96px"}/>
            <Nav section={"bottom-bar"} title={"Doormat Navigation"} links ={
                [
                    ["Home", "https://www.google.com/"],
                    ["About", "https://www.google.com/"],
                    ["Menu", "https://www.google.com/"],
                    ["reservations", "https://www.google.com/"],
                    ["Order Online", "https://www.google.com/"],
                    ["Login", "https://www.reddit.com/"]
                ]
            } />
            <Nav section={"bottom-bar"} title={"Contact"} links ={
                [
                    ["Address", "https://www.google.com/"],
                    ["Phone number", "https://www.google.com/"],
                    ["email", "https://www.google.com/"]
                ]
            } />
            <Nav section={"bottom-bar"} title={"Social Media"} links ={
                [
                    ["Address", "https://www.google.com/"],
                    ["Phone number", "https://www.google.com/"],
                    ["email", "https://www.google.com/"]
                ]
            } />
        </footer>
    )
}
export default Footer;