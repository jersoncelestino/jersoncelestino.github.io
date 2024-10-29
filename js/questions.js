(function(){
    const titleQuestions = [...document.querySelectorAll('.questinos__title')];
    /*Ponemos tres punstos y corchetes para convertir el resultado en un array*/
    
    
    /*console.log(titleQuestions)*/

    titleQuestions.forEach( question => 
        {
            question.addEventListener('click',()=>{
                /*alert('hola, me diste click')*//*Esta alerta nos permite visualizar qeu sí estamo interactuando con el boton cada vez que le damos click*/
                let height = 0; /*Creamos este elemento para calcular el alto*/
                let answer = question.nextElementSibling;/*esto es para obtener el siguiente elmento o el elemnto hermanos de question, el cual en este caso sería el parrafo*/
                let addPadding = question.parentElement.parentElement;/*Lo que hacemos aquí es agregar un nuevo elemento el cual tendra por valro el padre del elemnto question */
                 
                addPadding.classList.toggle('questions__padding--add');
                /*Lo qeu quiero es obtener todas las clases de la varibale addpadding, y agregra ro quitarle la clase si la tiene o no la tiene, agregar la clase questions__padding--add, 
                la cual agrega un padding-botton de 30 px; y como tenemos una transacicion para el padding, 
                se podrá visualizar un efecto */
                
                question.children[0].classList.toggle('questions__arrow--rotate')
                /*Aqui lo que estamos haciendo es que de la variable question, la cual es la pregunta
                llamo a sus elmentos hijos inciando con el elmento cero,y lo que hago con class list, es obtener
                las clases del elemnto hijo que en este caso es el span, y con el toogle lo que hago
                es que ya sea que agrego o elimine se le asignará el valor de la clase questions__arrow--rotate*/




                if(answer.clientHeight==0){
                    /*Lo que hace este condicional es que si el answer o el parrafo tiene un height igual a cero, es porque le quitamos el heigth*/
                    height = answer.scrollHeight;/*y si la condicional sucede yo quiero que answer tenga el alto minimo para que se muestre */

                }
                answer.style.height=`${height}px`/*con esto querio agregar el valor de height al answer de la variable heigh*/
                /*Como podemos ver, dentro del simbolo dolar conel height, hemos puesto con comillas inclinadas hacia la izquierda*/
            })
        }

    );



})();