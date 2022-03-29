import React from "react";
import alan from './assets/images/alan.jpg';
import titus from './assets/images/titus.png';
import danica from './assets/images/danica.jpg';
import nicholas from './assets/images/nicholas.jpg';


export default function Home() {
    return (
        <div class="container-fluid pt-5">
            <div class=" row justify-content-md-center">
                <div class="col-md-2 ">
                    <img src={titus} alt="w i d e Titus " style={{"width":"100%"}}/>
                    <div class="caption ">
                        <p>Titus Nguyen - Senior Developer</p>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <img src={danica} alt="Danica " style={{"width":"100%"}}/>
                    <div class="caption ">
                        <p>Danica Van Alstine - Director</p>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <img src={alan} alt="Alan " style={{"width":"100%"}}/>
                    <div class="caption ">
                        <p>Alan Zhang - Sound Director</p>
                    </div>

                </div>
                <div class="col-md-2 ">
                    <img src={nicholas} alt="Nicholas Li " style={{"width":"100%"}}/>
                    <div class="caption ">
                        <p>Nicholas Li - Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}