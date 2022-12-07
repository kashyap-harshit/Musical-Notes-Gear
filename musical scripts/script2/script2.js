


function f_t_f(note){
    if(f_t_2 == 0){
        i_fields[1].value = i_fields[1].value + note;
        f_t_2 = 1;
    }
    else{
        i_fields[1].value = i_fields[1].value + " " + note;
    }

}

convert.addEventListener("click", ()=>{
    notes_lst.forEach((e)=>{
        if(e=="S"){
            f_t_f("C");

        }
        if(e=="R1"){
            f_t_f("C#");

        }
        if(e=="R2"){
            f_t_f("D");

        }
        if(e=="G1"){
            f_t_f("D#");

        }
        if(e=="R3"){
            f_t_f("D#");

        }
        if(e=="G2"){
            f_t_f("E");

        }
        if(e=="G3"){
            f_t_f("E");

        }
        if(e=="M1"){
            f_t_f("F");

        }
        if(e=="M2"){
            f_t_f("F#");

        }
        if(e=="P"){
            f_t_f("G");

        }
        if(e=="D1"){
            f_t_f("G#");

        }
        if(e=="D2"){
            f_t_f("A");

        }
        if(e=="N1"){
            f_t_f("A#");

        }
        if(e=="D3"){
            f_t_f("A#");

        }
        if(e=="N2"){
            f_t_f("B");

        }
        if(e=="N3"){
            f_t_f("B");

        }
    
        
    });
});




if(window.matchMedia("(max-width: 280px)").matches){
    head.innerHTML = `
        <title>Musical Notes Gear</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="resp.css">
    `;
}

if(window.matchMedia("(max-width: 540px)").matches){
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
                <li class="m-notes"><button class="m-notes-btn">G2</button></li>
                <li class="m-notes"><button class="m-notes-btn">M1</button></li>
            </ul>
            <ul>
                <li class="m-notes"><button class="m-notes-btn">M2</button></li>
                <li class="m-notes"><button class="m-notes-btn">P</button></li>
                <li class="m-notes"><button class="m-notes-btn">D1</button></li>
                <li class="m-notes"><button class="m-notes-btn">D2</button></li>
                <li class="m-notes"><button class="m-notes-btn">N1</button></li>
                <li class="m-notes"><button class="m-notes-btn">N2</button></li>
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
