import "./Nav.css";
function Nav(props) {
    return (
        <nav>
            <ul className={props.section}>
                <p><strong>{props.title}</strong></p>
                {props.links.map((item) => {
                    function handleClick(anchor) {
                        return undefined;
                        //TODO
                    }
                    if (props.section === "top-bar") {
                        return (
                            <li className={"nav-item"}>
                                <a href={`/#${item.anchor}`}
                                   onClick={handleClick(item.anchor)}
                                   key={item.anchor}
                                   className={"nav-link"}
                                >{item.label}</a>
                            </li>
                        )
                    } else {
                        return (
                            <li className={"nav-item"}>
                                <a href={item.href}
                                   onClick={handleClick(item.anchor)}
                                   key={item.anchor}
                                   className={"nav-link"}
                                >{item.label}</a>
                            </li>
                        )
                    }
                } )
                }

            </ul>
        </nav>
    )
}
export default Nav;