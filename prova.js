const lado1 = Document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const res = document.querySelector("Triângulo");
const btn = document.querySelector("Calcular");
const l1 = document.querySelector("l1");
const l2 = document.querySelector("l2");
const l3 = document.querySelector("l3");

//mostrar ao usuário que o campo não foi preenchido
lado1.onblur = () => {
    if(n1.value == ""){
        lado1.styleText = "color: #aa0044";
        l1.styleText = "border-color: #aa0044";
    }else{
        lado1.style = "color: #000000";
        l1.style = "border-color: #000000";
    }
}

lado2.onblur = () => {
    if(n2.value == ""){
        lado2.style = "color: #aa0044";
        l2.style = "border-color: #aa0044";
    }else{
        lado2.style = "color: #000000";
        l2.style = "border-color: #000000";
    }
}

lado3.onblur = () => {
    if(n3.value == ""){
        lado3.style = "color: #aa0044";
        l3.style = "border-color: #aa0044";
    }else{
        lado3.style = "color: #000000";
        l3.style = "border-color: #000000";
    }
}
btn.onclick = () => {
    if(n1.value == ""){
        n1.focus();
    }else if (n2.value == ""){
        n2.focus();
    }else if (n3.value == ""){
        n3.focus();
    }else{
        res.value = tipo(n1.value, n2.value, n3.value)
    }   
}
/*
const media = (valor1,valor2,valor3) => {
    valor1 = Number.parseInt(valor1);
    valor2 = Number,parseInt(valor2);
    valor3 = Number,parseInt(valor3);
    return (valor1 == valor2 && valor2 == valor3);
}
*/


/*let ladoa = 1;
let ladob = 2;
let ladoc = 3;
    if (ladoa == ladob && ladob == ladoc){
    console.log ("Triângulo Equiatero");
    }else if (ladoa != ladob && ladob !=ladoc && ladoa !=ladoc){
    console.log ("Triângulo Escaleno");
}else{
    console.log ("Triângulo Isósceles");}*/