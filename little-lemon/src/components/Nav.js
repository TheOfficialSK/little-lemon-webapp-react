import "./Nav.css";
function Nav(props) {
    return (
        <nav>
            <ul className={props.section}>
                <p><strong>{props.title}</strong></p>
                {props.links.map((link) => {
                    return (
                        <li className={"nav-item"}>
                            <a href={link[1]}>{link[0]}</a>
                        </li>
                    )
                } )
                }

            </ul>
        </nav>
    )
}
export default Nav;