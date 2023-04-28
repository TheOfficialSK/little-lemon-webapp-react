import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Nav.css";

function Nav(props) {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        } else {
            console.error(`Element with ID "${id}" not found.`);
        }
    };

    return (
        <nav>
            <ul className={props.section}>
                <p><strong>{props.title}</strong></p>
                {props.links.map((item) => {
                    if (props.section === "top-bar") {
                        return (
                            <li key={Math.random().toString()} className={"nav-item-top"}>
                                <Link
                                    to={item.to}
                                    className={"nav-link"}
                                    onClick={() => item.anchor && scrollToElement(item.anchor)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    } else {
                        return (
                            <li key={Math.random().toString()} className={"nav-item-bottom"}>
                                <a
                                    href={item.href}
                                    className={"nav-link"}
                                    onClick={() => item.anchor && scrollToElement(item.anchor)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        )
                    }
                })}
            </ul>
        </nav>
    )
}

export default Nav;
