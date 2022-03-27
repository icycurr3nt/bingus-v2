import React from "react";

export default function Home() {
    return (
        <div class="container-fluid pt-5">
            <div class=" row justify-content-md-center">
                <div class="col-md-2 ">
                    <img src="assets/images/titus.png " alt="w i d e Titus " style={{"width":"100%"}}/>
                    <div class="caption ">
                        <p>Titus Nguyen - Senior Developer</p>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <img src="assets/images/danica.jpg " alt="Danica " style={{"width":"100%"}}/>
                    <div class="caption ">
                        <p>Danica Van Alstine - Director</p>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <img src="assets/images/alan.jpg " alt="Alan " style={{"width":"100%"}}/>
                    <div class="caption ">
                        <p>Alan Zhang - Sound Director</p>
                    </div>

                </div>
                <div class="col-md-2 ">
                    <img src="assets/images/nicholas.jpg " alt="Nicholas Li " style={{"width":"100%"}}/>
                    <div class="caption ">
                        <p>Nicholas Li - Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}