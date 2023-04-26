import logo from "./assets/Logo.svg";
import Nav from "./Nav";

function Footer() {
    return (
        <footer>
            <img className={"header-logo"}src={logo} alt="Little Lemon Logo" width={"200px"} height={"96px"}/>
            <p>Doormat navigation</p>
            <Nav links ={
                [
                    ["Home", "https://www.google.com/"],
                    ["About", "https://www.google.com/"],
                    ["Menu", "https://www.google.com/"],
                    ["reservations", "https://www.google.com/"],
                    ["Order Online", "https://www.google.com/"],
                    ["Login", "https://www.reddit.com/"]
                ]
            } />
            <p>Contact</p>
            <Nav links ={
                [
                    ["Address", "https://www.google.com/"],
                    ["Phone", "https://www.google.com/"],
                    ["email", "https://www.google.com/"]
                ]
            } />
            <p>Social Media</p>
            <Nav links ={
                [
                    ["Address", "https://www.google.com/"],
                    ["Phone", "https://www.google.com/"],
                    ["email", "https://www.google.com/"]
                ]
            } />
        </footer>
    )
}
export default Footer;