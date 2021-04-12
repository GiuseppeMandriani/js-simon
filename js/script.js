// console.log('JS Ok');
// console.log('JQ', $);


/*******
 * Descrizione
    
    - Un alert() espone 5 numeri generati casualmente.
    - Da li parte un timer di 30 secondi.
    - Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    Consigli
    Pensate a quello che volete fare e scrivete dei commenti per aiutarvi con la logica

    Dividete in piccoli problemi la consegna.
    Individuate gli elementi di cui avete bisogno per realizzare il programma.
 */

$(document).ready(function(){

    // Refs

    var size = 5;  // Numeri da memorizzare

    var numberList = [];  // Contenitore numeri

    var prova = $('.prova');

    var userList = [];

    // Setup

    var countDown = 3;

    // Generatore numeri e inserimento

    while(numberList.length < size){
        var number = getRandomNumber(1,100);

     // Verifico unicità e inserisco
     if(!numberList.includes(number)){
         numberList.push(number);
     }


    }

    console.log(numberList);
    alert('Osserva e memorizza i numeri: ' + '\n' + numberList);
    
    
    var interval = setInterval(function(){
        if( countDown === 0){
            clearInterval(interval);
            prova.text('tempo scaduto')

            for (var i = 0; i < size; i++){
                userNumber = parseInt(prompt('Inserire i numeri che si ricordano'));
                userList.push(userNumber);

                
            }
            console.log(userList);


            

        } else{
            prova.text(countDown);
            countDown--;
        }
        // console.log('tempo scaduto');

    },1000);

    

    // Timig dopo aver mostrato numeri


    










    // End Doc Ready
})




/**************************
 * 
 * UTILITIES / FUNCTIONS
 * 
 **************************/

// Function Numeri random

/**
 * 
 * @param {*} min // Minimo range
 * @param {*} max // Max range
 * @returns // Random Number
 */

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

