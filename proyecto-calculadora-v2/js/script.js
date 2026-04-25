const pantalla = document.getElementById("pantalla");

const btn_numebers = document.querySelectorAll(".number");
const btn_signos = document.querySelectorAll(".singo");
const btn_igual = document.querySelector(".igual");
const btn_ac = document.querySelector(".ac");
const bnt_delete = document.querySelector(".delete");

function esOperador(char) {
    return ["+", "-", "*", "/"].includes(char); //esta dentro de array?
}

function calcular(expresion) {
    list_expresion = Array.from(expresion);

    console.log(list_expresion)
    let temp = "";
    let parentesis = "";

    for (let i = 0; i < list_expresion.length; i++) {
        // console.log(i)
        if (list_expresion[i] === "(") {
            // console.log(list_expresion[i])
            let opar;
            for (let j = i + 1; j < list_expresion.length; j++) {
                if (list_expresion[j] === ")") {
                    opar = eval(parentesis);
                    console.log(opar)
                    i = j
                    temp += "*"
                    temp += opar
                    break;
                } else {
                    parentesis += list_expresion[j]
                    console.log(parentesis)
                }

            }
        } else {
            temp += list_expresion[i];
            console.log(temp)
        }

    }
    let resultado = eval(temp)
    return resultado;
}


btn_signos.forEach(boton => {
    boton.addEventListener("click", () => {
        let ultimo = pantalla.value.slice(-1);

        if (!esOperador(ultimo)) {
            pantalla.value += boton.textContent;
        }
    });
});

btn_igual.addEventListener("click",()=>{
    try{
        //pantalla.value = eval(pantalla.value)
        pantalla.value = calcular(pantalla.value);
    }catch{
        pantalla.value = "Error";
    }
})

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

