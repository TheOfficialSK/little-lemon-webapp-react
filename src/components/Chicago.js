import React from "react";
import './styles/Chicago.css';
import mario from "./assets/mario.png";
import founder2 from "./assets/founder2.png";
function Chicago() {
    return (
        <div id="Chicago">
        <section className={"about"}>
            <section className={"text"}>
                <h1 className={"abouth1"}>Little Lemon</h1>
                <h3 className={"abouth3"}>Chicago</h3>
                <p className={"aboutp"}>We are the founders of Little Lemon, and we share a
                    passion for authentic Italian cuisine. With years of experience in the restaurant industry,
                    we wanted to create a space that reflected our love for food and our commitment to using
                    fresh and locally-sourced ingredients. Our dedication to quality and our warm and inviting
                    approach have helped make Little Lemon a beloved destination for Italian food lovers in
                    Chicago.</p>
            </section>
            <section className={"founders"}>
                <img className={"image-one"} src={mario} alt={"homepage"}/>
                <img className={"image-two"} src={founder2} alt={"homepage"}/>
            </section>
        </section>
        </div>
    )
}
export default Chicago;