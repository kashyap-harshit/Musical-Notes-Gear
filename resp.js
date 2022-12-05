let mainBody = document.querySelector(".main");


if(window.matchMedia("(max-width: 425px)").matches){
    mainBody.innerHTML = `
        <p class="h-m">
            musical notes gear
        </p>
        <div class="input-d">
            <div class="i-h">
                <p class="input-h">Indian system</p>
                <textarea class="input-m" type="text"></textarea>
            </div>

        </div>
        <div class="l-items">
            <ul>
                <li class="m-notes"><button class="m-notes-btn">S</button></li>
                <li class="m-notes"><button class="m-notes-btn">R1</button></li>
                <li class="m-notes"><button class="m-notes-btn">R2</button></li>
                <li class="m-notes"><button class="m-notes-btn">G1</button></li>
                <li class="m-notes"><button class="m-notes-btn">R3</button></li>
                <li class="m-notes"><button class="m-notes-btn">G2</button></li>
                <li class="m-notes"><button class="m-notes-btn">G3</button></li>
                <li class="m-notes"><button class="m-notes-btn">M1</button></li>
            </ul>
            <ul>
                <li class="m-notes"><button class="m-notes-btn">M2</button></li>
                <li class="m-notes"><button class="m-notes-btn">P</button></li>
                <li class="m-notes"><button class="m-notes-btn">D1</button></li>
                <li class="m-notes"><button class="m-notes-btn">D2</button></li>
                <li class="m-notes"><button class="m-notes-btn">N1</button></li>
                <li class="m-notes"><button class="m-notes-btn">D3</button></li>
                <li class="m-notes"><button class="m-notes-btn">N2</button></li>
                <li class="m-notes"><button class="m-notes-btn">N3</button></li>
            </ul>
        </div>
        <div class="btns">
            <button class="btn clear">CLEAR</button>
            <button class="btn convert">CONVERT</button>
        </div>
        <div class="input-d">
            <div class="i-h">
                <p class="input-h">western system</p>
                <textarea class="input-m" type="text"></textarea>
            
            </div>
        </div>
        
        
        
    `;
}




if(window.matchMedia("(max-width: 375px)").matches){
    mainBody.innerHTML = `
        <p class="h-m">
            musical notes gear
        </p>
        <div class="input-d">
            <div class="i-h">
                <p class="input-h">Indian system</p>
                <textarea class="input-m" type="text"></textarea>
            </div>

        </div>
        <div class="l-items">
            <ul>
                <li class="m-notes"><button class="m-notes-btn">S</button></li>
                <li class="m-notes"><button class="m-notes-btn">R1</button></li>
                <li class="m-notes"><button class="m-notes-btn">R2</button></li>
                <li class="m-notes"><button class="m-notes-btn">G1</button></li>
                <li class="m-notes"><button class="m-notes-btn">R3</button></li>
                <li class="m-notes"><button class="m-notes-btn">G2</button></li>
            </ul>
            <ul>
                <li class="m-notes"><button class="m-notes-btn">G3</button></li>
                <li class="m-notes"><button class="m-notes-btn">M1</button></li>
                <li class="m-notes"><button class="m-notes-btn">M2</button></li>
                <li class="m-notes"><button class="m-notes-btn">P</button></li>
                <li class="m-notes"><button class="m-notes-btn">D1</button></li>
                <li class="m-notes"><button class="m-notes-btn">D2</button></li>
            </ul>
            <ul>
                <li class="m-notes"><button class="m-notes-btn">N1</button></li>
                <li class="m-notes"><button class="m-notes-btn">D3</button></li>
                <li class="m-notes"><button class="m-notes-btn">N2</button></li>
                <li class="m-notes"><button class="m-notes-btn">N3</button></li>
            </ul>
        </div>
        <div class="btns">
            <button class="btn clear">CLEAR</button>
            <button class="btn convert">CONVERT</button>
        </div>
        <div class="input-d">
            <div class="i-h">
                <p class="input-h">western system</p>
                <textarea class="input-m" type="text"></textarea>
            
            </div>
        </div>
        
        
        
    `;
}
