/****************************
 * Objetivo: Realizar o calculo de uma tabuada, tendo duas entradas a tabuada e o computador
 * Data: 09/02/2023
 * Autor(a): Layla
 * Versão: 1.0
 */

var calculo = require("./modulo/calcularTabuada.js");

var readline = require("readline");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question("Valor1: \n", function (multiplicando) {
  // replace - permite trocar um conteúdo da string por outro
  let valor1 = numero1.replace(",", ".");

  entradaDados.question("Valor2: \n", function (numero2) {
    let valor2 = numero2.replace(",", ".");

  });

});
