/*funcion autoinvocada para proeger las variables de otros archivos*/

(function(){
    
    const sliders = [...document.querySelectorAll('.testimony_body')]; /* obtiene todos los documentos de la clase testimomy_body y lo comvierte en un array*/
    const buttonNext = document.querySelector('#next');   /* obtiene el valor del boton  */
    const buttonBefore = document.querySelector('#before'); /* obtiene el valor del boton  */
    let value;   

    buttonNext.addEventListener('click', ()=>{     /*agrega un avento al boton next cambiando la posicion a 1*/
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{  /*agrega un avento al boton next cambiando la posicion a -1*/
        changePosition(-1);
    });


    /* funcion que obtiene la data set de la clase testimony_body--show sumandole el valor del changeposition*/
    const changePosition = (add)=>{                                                                    
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        
        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');/*quita la clase al elemto actual que es numero del elemento currentTestimony -1, se accede a sus clases y quita la clase testimony_body--show*/
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;  /*cuando el valor lleva a cero lo envia al largo del slider de lo contrario lo manda al 1*/
        }

        sliders[value-1].classList.add('testimony_body--show'); /*accede al elemnto del value -1 y agrega a la clase testimony_body--show que es la clase que muestra los elementos*/

    }
})();