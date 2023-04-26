
function Nav(props) {
    return (
        <nav>
            <ul>
                {props.links.map((link) => {
                    return (
                        <li>
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