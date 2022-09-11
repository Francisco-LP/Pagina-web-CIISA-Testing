/*funcion autoinvocada para proteger las variables de otros archivos*/

(function(){
    const titleQuestions = [...document.querySelectorAll('.questions_title')];   /*con los 3 puntos convierte todos los elementos seleccionados que tengan el nombre de la clase questions_title en un array */
    console.log(titleQuestions)

    /*Iteracion de los elementos del array */
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{       /*funcion  */
            let height = 0;
            let answer = question.nextElementSibling;       /* parrafo que viene despues de question_title*/
            let addPadding = question.parentElement.parentElement;      /* obtiene al padre de question_title dos veces que seria question_padding*/

            addPadding.classList.toggle('questions_padding--add');      /*agrega o quita la clase de question_padding */
            question.children[0].classList.toggle('questions_arrow--rotate');   /*del elemento question obtiene al primer hijo y obtiene las clases del spam agrega o quita la clase question_arrow que hace que el elemento rote*/

            if(answer.clientHeight === 0){          /*si el parrafo tiene un alto de 0 es porque no tiene el height*/
                height = answer.scrollHeight;       /*da el alto a la propiedad para que se muestre */
            }

            answer.style.height = `${height}px`;
        });
    });
})();