"use strict";
class CalculadoraIMC {
    
    constructor (){
        this.peso = "";
        this.altura = "";
    }
    calcularIMC(){
        //cast
        this.peso = document.getElementById("txtPeso").value;
        this.altura = document.getElementById("txtAltura").value;
        if(isNaN(this.peso) || this.peso == "" || this.peso.charAt(0) == "."){
            alert("Peso no introducido o introducido de forma incorrecta");
            return;
        }
        if(isNaN(this.altura) || this.altura == "" || this.altura.charAt(0) == "."){
            alert("Altura no introducida o introducida de forma incorrecta");
            return;
        }
        //Hacer visible el div
        document.getElementById('contenedor_resultado').style.display='block';

        var kg = parseFloat(this.peso);
        var m = parseFloat(this.altura);
        var res = Math.round((kg / Math.pow(m, 2))*100)/100;    //resultado redondeado

        document.getElementById('imc').innerHTML = res;

        //Escribir resultado dependiendo del rango
        var resultStr = "";
        if(res < 18.5){
            resultStr = "Peso insuficiente"
        }else if (res >= 18.5 && res <= 24.9) {
            resultStr = "Normopeso";
        }else if (res >= 25 && res <= 25.6) {
            resultStr = "Sobrepeso grado I";
        }else if (res >= 27 && res <= 27.9) {
            resultStr = "Sobrepeso grado II (preobesidad)";
        }else if (res >= 30 && res <= 34.9) {
            resultStr = "Obseidad de tipo I";
        }else if (res >= 35 && res <= 35.9) {
            resultStr = "Obesidad de tipo II";
        }else if (res >= 40 && res <= 49.9) {
            resultStr = "Obesidad de tipo II (mórbida)";
        }else if (res > 50) {
            resultStr = "Obesidad de tipo IV (extrema)";
        }
        document.getElementById('resultado').innerHTML = resultStr;
    }
}
var calculadora = new CalculadoraIMC();