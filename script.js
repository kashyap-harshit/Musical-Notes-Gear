let buttons = document.querySelectorAll(".m-notes-btn");
let i_fields = document.querySelectorAll(".input-m");
let notes_lst = [];
let f_t = 0;
let f_t_2 = 0;
let clear = document.querySelector(".clear");
let convert = document.querySelector(".convert");



buttons.forEach((button) =>{
    button.addEventListener("click", ()=>{
        notes_lst.push(button.innerHTML);
        console.log(notes_lst);
        if(f_t == 0){
            i_fields[0].value = i_fields[0].value + button.innerHTML;
            f_t = 1;
        }
        else{
            i_fields[0].value = i_fields[0].value + " " + button.innerHTML;
        }
        
    });
});

clear.addEventListener("click", ()=>{
    notes_lst = [];
    i_fields.forEach((e)=>{
        e.value = "";
    });
    f_t = 0;
    f_t_2 = 0;
});



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
            f_t_f("D");

        }
        if(e=="R3"){
            f_t_f("D#");

        }
        if(e=="G2"){
            f_t_f("D#");

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
            f_t_f("A");

        }
        if(e=="D3"){
            f_t_f("A#");

        }
        if(e=="N2"){
            f_t_f("A#");

        }
        if(e=="N3"){
            f_t_f("B");

        }
    
        
    });
});
