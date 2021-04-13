// console.log('JS Ok');
// console.log('JQ', $);


// Metodo corretto


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

    
    var numberListRandom = [];        // Contenitore numeri Random
    
    var userList = [];          // Numeri inseriti dall'utente
    
    
    
    // Setup
    var size = 5;               // Numeri da memorizzare

    var countDown = 3000;

    var min = 1;

    var max = 90;


    // Generatore numeri e visualizzazione in alert

    while(numberListRandom.length < size){
        var randomNumber = getRandomNumber(min,max);

        if(!numberListRandom.includes(randomNumber)){
            numberListRandom.push(randomNumber);
        }
    }

    // Mostrare numeri all'utente
    alert(numberListRandom);
    console.log(numberListRandom);


    // Logica del Gioco

    setTimeout(function() {

        // Richiesta numeri all'utente

        var userNumbers = [];

        while(userNumbers.length < size){
            var number = parseInt(prompt('Inserisci il ' + (userNumbers.length + 1) + '° numero' ));

            while((isNaN(number)) || ((number < min) || (number > max))) {
                number = parseInt(prompt('Numero non valido, inserisci il ' + (userNumbers.length + 1) + '° numero' ));
            }

            // Verifico unicità
            if(!userNumbers.includes(number)){
                userNumbers.push(number);

            }else{
                alert('Numero già inserito');
            }
        }



        // Collezionare numeri corretti

        var risposteCorrette = [];

        for(var i = 0; i < userNumbers.length; i++ ){

            if(numberListRandom.includes(userNumbers[i])){
                risposteCorrette.push(userNumbers[i]);
            }
        };


        // Risultati

        alert('Risultati' + 
            '\nLista Proposta:\n' + numberListRandom +
            '\n\nLista Utente:\n' + userNumbers +
            '\n\nIndovinati:\n' + risposteCorrette.length + ' numeri\n ' + risposteCorrette);

    },countDown);







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

