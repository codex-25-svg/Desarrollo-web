const pantalla = document.getElementById("pantalla");

const btn_numebers = document.querySelectorAll(".number");
const btn_signos = document.querySelectorAll(".singo");
const btn_igual = document.querySelector(".igual");
const btn_ac = document.querySelector(".ac");
const bnt_delete = document.querySelector(".delete");

bnt_delete.addEventListener("click", ()=>{
    pantalla.value = pantalla.value.slice(0,-1);
})

btn_ac.addEventListener("click", function(){
    pantalla.value = "";
});

btn_numebers.forEach(btn =>{
    btn.addEventListener("click", function(){
        pantalla.value += btn.textContent;
    });
});

btn_signos.forEach(sign =>{
    sign.addEventListener("click", function(){
        pantalla.value += sign.textContent;
    });
});

btn_igual.addEventListener("click",()=>{
    try{
        pantalla.value = eval(pantalla.value);
    }catch{
        pantalla.value = "Error";
    }
})
