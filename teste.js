let ladoa = 1;
let ladob = 2;
let ladoc = 3;
    if (ladoa == ladob && ladob == ladoc){
    console.log ("Triângulo Equiatero");
    }else if (ladoa != ladob && ladob !=ladoc && ladoa !=ladoc){
    console.log ("Triângulo Escaleno");
}else{
    console.log ("Triângulo Isósceles");}


/*
const n1 = document.querySelector("#nota1");
const n2 = document.querySelector("#nota2");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const aviso = document.querySelector("#aviso");

n1.onblur = () => {
    if(n1.value == ""){
        l1.style = "color: #aa0044";
        n1.style = "border-color: #aa0044"
    }else{
        l1.style = "color: #000000";
        n1.style = "border-color: #000000"
    }
}

n2.onblur = () => { 
    if(n2.value == ""){
        l2.style = "color: #aa0044";
        n2.style = "border-color: #aa0044"
    }else{
        l2.style = "color: #000000";
        n2.style = "border-color: #000000"
    }
}
btn.onclick = () => {
    if(n1.value == ""){
        n1.focus();
    }else if(n2.value == ""){
        n2.focus();
    }else if(n1.value > 10 || n1.value < 0 || n2.valu > 10 || n2.value <0) {
        n1.value = "";
        n2.value = "";
        aviso.innerText = "Somente valores entre 0 e 10";
    }else{
        res.value = media(n1.value, n2.value)
    }
}

const media = (valor1, valor2) => {
    valor1 = Number.parseFloat(valor1);
    valor2 = Number.parseFloat(valor2);
    return (valor1+valor2) / 2;
}
*/