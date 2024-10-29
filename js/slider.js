/*Esta funcion nos permite desplazarnso de testimonio a testimonio*/
(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')];/*Creamos una constantes que contenerá a todos los elementos de la clase testimony__body, los tres puntos se colocan para que en vez de ser un nodo de elmentos sean un array*/
    console.log(sliders);
    
    const buttonNext = document.querySelector('#next');/*Aquí estamos creando una constante qeu llame al elmento con id next*/
    const buttonBefore = document.querySelector('#before')/*Aquí estamos creando una constante qeu llame al elmento con id before*/
    
    let value;/*estamos creando un elmento qeu se llame value*/


    /*A CONTINUACIÓN AGREGAREMOS UN EVENTO PARA CADA UNO DE LOS CONSTANTES DE LOS BOTONES CREADOS*/

    buttonNext.addEventListener('click',()=>{
        changePosition(1);/*Lo que estamos haciendo con esto es que llame a la funcion changeposition con un valor de 1*/
    });/*Quiero que cada vez uq alguien le de click al elemento se ejecute una función */

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);/*Lo que estamos haciendo con esto es que llame a la funcion changeposition con un valor de -1*/
    });/*Quiero que cada vez uq alguien le de click al elemento se ejecute una función */


    const changePosition = (add)=>{
        const currenttestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currenttestimony);/*aqui lo convertimos a número para qeu puedo sumarse*/
        value+=add;
        
        sliders[Number(currenttestimony)-1].classList.remove('testimony__body--show');
        if (value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
            /*Lo que quiere deir la fila anterior a esta es que si value es 0 entonces el valor de la variablle value será la cantidad de slide que existe(sliders.length) caso contrario(es decir que valuee sea la cantidad de slide +1) value será 1*/
            /*Esa forma de escribir el codigo se suele usar para condicionales if-elfe*/
        }
        /*Aquí estamos poniendo value-1 porque value es la cantidad de sliders como valor, pero le pondemos - 1 porque es por ids el último slider tendría un valor 2, pero sí solo
        y si solo lo dejamos con value tomará la cantidad 3 y no 2, valor que nosotros necesitamos  */
        sliders[value-1].classList.add('testimony__body--show');        
    }
    
    console.log(sliders)

})();/*Esta funcion se está llamando así misma*/