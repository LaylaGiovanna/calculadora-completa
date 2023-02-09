/**************************** 
 * Objetivo: Realizar o calculo de uma tabuada, tendo duas entradas a tabuada e o computador
 * Data: 09/02/2023
 * Autor(a): Layla
 * Versão: 1.0
 */

//retorna o resultado de uma tabuada
const calcularTabuada = function(multiplicando, maxMultiplicador){
    let tabuada = Number(multiplicando);
    let maxContador = Number(maxMultiplicador);

    //inicia em 0 start da repetição
    let cont = 0;
    let resultado;
    let status = true;

    //Validação de entrada vazio e entrada 0
    if(tabuada == 0 || maxContador == 0)
        status = false;
    //Validação de entrada de carcateres    
    else if(isNaN(tabuada) || isNaN(maxContador))    
        status = false;
    else{
//pode ser feito com while ou for
      
        /*  while(cont <= maxContador){
            resultado = tabuada * cont;
            //2x0=0
            console.log(tabuada + 'x' + cont + '=' + resultado);
            
            //incremento
            //cont = cont + 1;
            //cont++;
            cont +=1;
        }  */

        for (let cont = 0; cont <= maxContador; cont++) {
            resultado = tabuada * cont;
            //console.log(tabuada + 'x' + cont + '=' + resultado);
            console.log(`${tabuada} x ${cont} = ${resultado}`)
        }

    }   
    return status;
};

//calcularTabuada(1, 60);

module.exports = {
    calcularTabuada
}