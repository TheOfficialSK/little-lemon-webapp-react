import React from "react";
import './styles/Chicago.css';
import mario from "./assets/mario.png";
import founder2 from "./assets/founder2.png";
function Chicago() {
    return (
        <div id={"Chicago"}>
        <section className={"about"}>
            <section className={"text"}>
                <h1 className={"abouth1"}>Little Lemon</h1>
                <h3 className={"abouth3"}>Chicago</h3>
                <p className={"aboutp"}>Little Lemon is a family owned, traditional
                    Italian restaurant that provides a classic
                    Italian dining atmosphere with a modern
                    twist.</p>
            </section>
            <section>
                <img className={"image-one"} src={mario} alt={"homepage"}/>
                <img className={"image-two"} src={founder2} alt={"homepage"}/>
            </section>
        </section>
        </div>
    )
}
export default Chicago;