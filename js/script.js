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

    var size = 5;               // Numeri da memorizzare

    var numberList = [];        // Contenitore numeri

    var prova = $('.prova');

    var userList = [];          // Numeri inseriti dall'utente

    var equalNumber = [];       // Numeri uguali

    // Setup

    var countDown = 5;

    var min = 1;

    var max = 100;

    // Generatore numeri e visualizzazione in alert

    while(numberList.length < size){
        var number = getRandomNumber(min,max);

     // Verifico unicità e inserisco
     if(!numberList.includes(number)){
         numberList.push(number);
     }


    }

    console.log(numberList);
    alert('Osserva e memorizza i numeri: ' + '\n' + numberList);


    // CountDown e Richiesta numeri all'utente
    var interval = setInterval(function(){

        
        // Countdown terminato, richiesta numeri all'utente
        if( countDown === 0){
            clearInterval(interval);
            prova.text('tempo scaduto');

            //Richiesta numeri utente e verifiche
           for (var i = 0; i < size; i++){
               userNumber = parseInt(prompt('Inserire i numeri che si ricordano'));

               // Verifico unicità e inserisco

               while(userList.includes(userNumber) || ((userNumber < min) || (userNumber > max)) || (isNaN(userNumber))){
                   userNumber = parseInt(prompt('Inserire numero NON inserito o compreso nel range'));

               }
               userList.push(userNumber);
               if(numberList.includes(userNumber)){
                   equalNumber.push(userNumber);
               }
           }


           console.log('I numeri da te inseriti sono: ', userList);
           console.log('I numeri corrispondenti da te inseriti sono:' , equalNumber);

               if(equalNumber.length == 2){
                console.log('AMBO, 2 NUMERI UGUALI ');
                prova.text('AMBO, 2 NUMERI UGUALI ');
                confetti({
                    particleCount: 1000,
                    spread:360,
                }
                );
            } else if(equalNumber.length == 3){
                console.log('TERNA, 3 NUMERI UGUALI')
                prova.text('TERNA, 3 NUMERI UGUALI');
                confetti({
                    particleCount: 1000,
                    spread:360,
                }
                );
            } else if (equalNumber.length == 4){
                console.log('QUATERNA, 4 NUMERI UGUALI');
                prova.text('QUATERNA, 4 NUMERI UGUALI');
                confetti({
                    particleCount: 1000,
                    spread:360,
                }
                );
            } else if(equalNumber.length == 5){
                console.log('BINGO, 5 NUMERI UGUALI');
                prova.text('BINGO, 5 NUMERI UGUALI');
                confetti({
                    particleCount: 1000,
                    spread:360,
                }
                );

            } else{
                console.log('HAI PERSO -- GAME OVER --')
                prova.text('HAI PERSO -- GAME OVER --');

            }
        }

        // Inizio Countdown
        else{
            prova.text(countDown);
            countDown--;
        }

        },1000);


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

