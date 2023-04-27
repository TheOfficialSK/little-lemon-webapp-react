import homepic from "./assets/homepage.png";
import React from "react";
import './CallToAction.css';

function CallToAction() {
    return (
        <div id={"CallToAction"}>
        <section className={"call-to-action"}>
            <section className={"text"}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p className={"call-to-action-text"}>Little Lemon is a family owned, traditional
                    Italian restaurant that provides a classic
                    Italian dining atmosphere with a modern
                    twist.</p>
                <button className={"reserve-a-table"}>Reserve a Table</button>
            </section>
            <section>
                <img className={"image"} src={homepic} alt={"homepage"}/>
            </section>
        </section>
        </div>
    );
}
export default CallToAction;