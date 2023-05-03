import homepic from "./assets/homepage.png";
import React from "react";
import './styles/CallToAction.css';

function CallToAction() {
    return (
        <div id={"CallToAction"}>
        <section className={"call-to-action"}>
            <section className={"text"}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p className={"call-to-action-text"}>We are Little Lemon, an Italian restaurant located in Chicago.
                    We offer a cozy and intimate atmosphere, serving authentic Italian dishes made with fresh and
                    locally-sourced ingredients.</p>
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