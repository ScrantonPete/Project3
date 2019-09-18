import React from "react";
import "./style.css";

function Menu() {

    return (
    <div class="container">
        <button type="button" class="btn btn-info" id="eat">Feed Me</button>
        <button type="button" class="btn btn-info" id="sleep">Change Me</button>
        <button type="button" class="btn btn-info" id="poop">Zzzzz</button>
        <button type="button" class="btn btn-info" id="log">Daily Log</button>
    </div>
    )
}
export default Menu;