



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






let dd = 0;

dDownImg.addEventListener("click", ()=>{
    if(dd == 0){
        sLinks.style.visibility = "visible";
        dd = 1;
    }
    else{
        sLinks.style.visibility = "hidden";
        dd = 0;
    }
    
});