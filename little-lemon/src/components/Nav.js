import "./styles/Nav.css";
function Nav(props) {
    return (
        <nav>
            <ul className={props.section}>
                <p><strong>{props.title}</strong></p>
                {props.links.map((item) => {
                    function handleClick(event, anchor) {
                        event.preventDefault();
                        console.log(`You clicked ${anchor}`);
                        const element = document.getElementById(anchor);

                        if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                        } else {
                            console.error(`Element with ID "${anchor}" not found.`);
                        }
                    }

                    if (props.section === "top-bar") {
                        return (
                            <li className={"nav-item-top"}>
                                <a href={`/#${item.anchor}`}
                                   onClick={(event) => handleClick(event, item.anchor)}
                                   key={item.anchor}
                                   className={"nav-link"}
                                >{item.label}</a>
                            </li>
                        )
                    } else {
                        return (
                            <li className={"nav-item-bottom"}>
                                <a href={item.href}
                                   onClick={(event) => handleClick(event, item.anchor)}
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