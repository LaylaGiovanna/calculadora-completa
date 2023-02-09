/************************
 * Objetivo: Arquivos de funções paraa realizar calculos matematicos
 * Data: 03/02/2023
 * Autora: Layla
 * Versão: 1.0
***********************/

//Realizar calculos matemáticos para realizar as 4 operações (SOMAR, SUBTRAIR, DIVIDIR, MULTIPLICAR)
//forma 01 (tradicional)
/* function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;
    let status = true;

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2;
    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2;
    // } else if (operacao == 'MULTIPLICAR') {
    //     
    // } else if (operacao == 'DIVIDIR') {
    //     if (valor2 == 0) {
    //         console.log('ERRO: Não foi possível fazer uma divisão por zero')
    //         status = false;
    //     } else {
    //         resultado = valor1 / valor2;
    //     } else {
    //     console.log('ERRO: A operação informada não é válida, confira a sua entrada. \n')
    //     status = false;
    // }

    switch (operacao){
        case 'SOMAR':
            resultado = valor1 + valor2;
            break;
        case 'SUBTRAIR':
            resultado = valor1 - valor2;
            break;
        case 'MULTIPLICAR':
            resultado = valor1 * valor2;
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não foi possível fazer uma divisão por zero')
                status = false;
            } else 
                resultado = valor1 / valor2;

                break;
        default:
            console.log('ERRO: A operação informada não é válida, confira a sua entrada. \n')
            status = false;
    }

    //validação para tratar a variável resultado quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else {
        status = false;
    }

}; */

//forma 02 de criar funçao
const calcular = function (numero1, numero2 , tipoCalculo){
    //forma 01 (tradicional)
function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;
    let status = true;


    switch (operacao){
        case 'SOMAR':
            resultado = valor1 + valor2;
            break;
        case 'SUBTRAIR':
            resultado = valor1 - valor2;
            break;
        case 'MULTIPLICAR':
            resultado = valor1 * valor2;
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não foi possível fazer uma divisão por zero')
                status = false;
            } else 
                resultado = valor1 / valor2;

                break;
        default:
            console.log('ERRO: A operação informada não é válida, confira a sua entrada. \n')
            status = false;
    }

    //validação para tratar a variável resultado quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado.toFixed(2);
    else {
        status = false;
    }

};
}

//forma 03
const SOMAR = (valor1, valor2) => valor1 + valor2;
const SUBTRAIR = (valor1, valor2) => valor1 - valor2;
const MULTIPLICAR = (valor1, valor2) => valor1 * valor2;
const DIVIDIR = (valor1, valor2) => valor1 / valor2;

module.exports = {
    calcular
}