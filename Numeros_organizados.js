

 alert("Ingrese los numeros enteros por el cual el programa tendra la funcion de organizarlos de manera ascendente y desadente");

listadeNumeros= [];
listadeNumeros2 = [];

listadeNumeros[0] = parseInt(prompt("numero1: "));
listadeNumeros[1] = parseInt(prompt("numero2: "));
listadeNumeros[2] = parseInt(prompt("numero3: "));
listadeNumeros[3] = parseInt(prompt("numero4: "));
listadeNumeros[4] = parseInt(prompt("numero5: "));

listadeNumeros2[0] = parseInt(prompt("numero6: "));
listadeNumeros2[1] = parseInt(prompt("numero7: "));
listadeNumeros2[2] = parseInt(prompt("numero8: "));
listadeNumeros2[3] = parseInt(prompt("numero9: "));
listadeNumeros2[4] = parseInt(prompt("numero10:"));
listadeNumeros = listadeNumeros.concat(listadeNumeros2);
listadeNumeros.sort((a, b) =>{
if(a == b){
    return 0;
}
if(a < b){
    return -1
}
return -1
})
document.write("lista completa ordenada ascendente: " + listadeNumeros );

document.write("lista completa ordenada descendente: " + listadeNumeros.reverse());
 
