import homepic from "./assets/homepage.png";
import React from "react";
import './HomePage.css';

function CallToAction() {
    return (
        <section className={"homepage"}>
            <section className={"text"}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p className={"homepage-text"}>Little Lemon is a family owned, traditional
                    Italian restaurant that provides a classic
                    Italian dining atmosphere with a modern
                    twist.</p>
                <button className={"reserve-a-table"}>Reserve a Table</button>
            </section>
            <section>
                <img className={"image"} src={homepic} alt={"homepage"}/>
            </section>
        </section>
    );
}
export default CallToAction;