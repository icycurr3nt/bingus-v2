import React from "react";
import alan from './assets/images/alan.jpg';
import titus from './assets/images/titus.png';
import danica from './assets/images/danica.jpg';
import nicholas from './assets/images/nicholas.jpg';
import animalA from './assets/images/animalA.jpg';
import animalN from './assets/images/animalN.jpg';
import komodo from './assets/images/komodo.png';
import penguin from './assets/images/penguin.jpeg';


export default function About() {
    return (
    <div class="container">
    <div class="row align-items-start">
        <div class="col"> </div>

        <div class="col-8 text-white" style={{"background-color": "#313537"}}>
            <div class="container">

                <h1 style={{"text-align": "center"}}>Titus Ngyuen</h1>
                <img src={titus} alt="Titus Nguyen" class="img-fluid rounded mx-auto d-block"/>
                <div class="container">
                    <p class="mt-3">
                        Born and raised in the U.S.A., in the small border town of Tucson, Arizona, Titus continues to pursue his education in computer science. His most recent endeavor is the newly released game, Unnamed Dating Sim. His other works include many notable discord
                        bots such as Tracer and Discord Movie Info. Titus is also an emerging devleper in the Minecraft modding scene. He is currently living and studying in his hometown of Tucson, Arizona at the age fourteen.
                    </p>

                    <img src={penguin} alt="His Favorite Animal: The Penguin" class="img-fluid rounded mx-auto d-block mb-5" style={{"width": "75%"}}/>
                </div>
            </div>

            <hr/>

            <div class="container mt-4">
                <h1 style={{"text-align":"center"}}>Danica Van Alstine</h1>
                <img src={danica} class="img-fluid rounded mx-auto d-block" style={{"width": "50%"}} alt="Danica Van Alstine"/>
                <div class="container">
                    <p class="mt-3">
                        Born and raised in the U.S.A., in the remote and rural town of Tucson, Arizona, Danica continues to live a life in pursuit of greater excellency. Her professional career intrests include computer science and dance. She has contributed and was a key team
                        member in Unnamed Dating Simulator's development. Danica has hobbies such as figure skating and reading manga. She currently works in web development, mainly in Javascript frameworks. She is currently studying at BASIS Tucson
                        North as a high school student.
                    </p>
                    <img src={komodo} alt="Her Favorite Animal: The Komodo Dragon" class="img-fluid rounded mx-auto d-block" style={{"width":"75%"}}/>
                </div>
            </div>

            <hr/>

            <div class="container mt-4">
                <h1 style={{"text-align":"center"}}>Alan Zhang</h1>
                <img src={alan} class="img-fluid rounded mx-auto d-block" style={{"width": "50%"}} alt="Alan Zhang"/>
                <div class="container">
                    <p class="mt-3">
                        Hello all, my name is Alan Zhang, I am a student at BASIS Tucson North that is currently in the 8th grade. Titus, Danica, Nicholas, and I are the creators of the Unnamed Dating Simulator. I am rank 400k in osu! and I am A in Tetr.io. I traveled to China
                        twelve years ago. Drinker of Kirkland Alkaline Water. Can be occasionally seen lurking at Costco. My favorite animal is the nightingale. Master Procrastinator.
                    </p>
                    <img src={animalA} alt="His Favorite Animal: The Nightingale" class="img-fluid rounded mx-auto d-block" style={{"width": "75%"}}/>
                </div>
            </div>

            <hr/>

            <div class="container mt-4">
                <h1 style={{"text-align":"center"}}>Nicholas Li</h1>
                <img src={nicholas} class="img-fluid rounded mx-auto d-block" style={{"width": "50%"}} alt="Nicholas Li"/>
                <div class="container">
                    <p class="mt-3">
                        My name is Nicholas Li. I am an 8th grade student at Basis Tucson North. I was born in North Carolina, but I moved to Arizona in 3rd grade. I have traveled to many places around the world with my family, such as France, Spain, China, Korea, Canada, Mexico,
                        and London. Math is my strongest subject. Math is my least favorite subject. I like pizza. I like pandas. My favorite color is orange.
                    </p>
                    <img src={animalN} alt="His Favorite Animal: The Panda" class="img-fluid rounded mx-auto d-block" style={{"width": "75%"}}/>
                </div>
            </div>

            <hr/>
        </div>
        <div class="col">
        </div>
    </div>
</div>)
}