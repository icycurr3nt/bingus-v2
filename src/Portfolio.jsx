import React from "react";

export default function Portfolio() {
    return (<div class="container">
    <div class="row align-items-start">
        <div class="col"/>

        <div class="col-8 text-white" style={{"background-color": "#313537"}}>
            <div class="container">

                <h1 style={{"text-align": "center"}}>Unnamed Dating Sim</h1>
                <img src="assets/images/title.png" alt="The Title Scene of Unamed Dating Sim" class="img-fluid rounded mx-auto d-block img-thumbnail"/>
                <hr/>
                <img src="assets/images/choice.png" alt="Screen Capture of Gameplay" class="img-fluid rounded mx-auto d-block mb-5 img-thumbnail"/>
                <hr/>
                <div class="container">
                    <p class="mt-3">
                        Unnamed Dating Sim is the team's first full release game. The game tells the story of a high school theatre club, young love, and new friendships. This was the first time that Alan Zhang took the role of the Creative Director, making the sound and character
                        design for the game. Nicholas Li programmed the scenes themselves, and Titus Nguyen programmed the mechanics of the title, credit, and chapter screens. Danica designed the user interface, and also helped to program the sound
                        into the scenes.
                    </p>
                    <p><a href="https://github.com/scotus-1/unnamed-dating-simulator/releases/tag/v1.0.0" class="external">Official Release v1.0.0</a></p>
                    <p><a href="https://github.com/scotus-1/unnamed-dating-simulator" class="external">Source Code</a></p>
                </div>
            </div>
        </div>
        <div class="col"/>
    </div>
</div>)
}