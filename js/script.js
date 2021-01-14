//. POPOLO L'ARRAY CON I NNUMERI RANDOM GENERATI DAL COMPUTER 

var numeriRandom = [];

for ( var i = 0 ; i < 5 ; i++) {
    var numero = random(1,100);

    if (numeriRandom.includes(numero)) {
        i--;
    } else {
    numeriRandom.push(numero);
    }
}

numeriRandom = numeriRandom.sort(function(a, b){return a - b});


//. MOSTRO L ARRAY
alert('I numeri random di questa partita sono ' + numeriRandom[0] + ' ' + numeriRandom[1] + ' ' + numeriRandom[2] + ' ' + numeriRandom[3] + ' ' + numeriRandom[4] + ' ');



//. IMPOSTO IL TIMER e le variabili

var secondi= 30;
var numeriUtente = [];
var tentativi = 5;
var numeriIndovinati = [];
var indovinati = 0;



var count = setInterval(() => {
    if ( secondi < 0) {
        clearInterval(count);
        //.FACCIO INDOVINARE I NUMERI

        for ( var i = 0 ; i < 5 ; i++) {

            var numero = parseInt(prompt('Inserisci i 5 numeri mostrati precedentemente' + 'hai ' + tentativi + ' tentativi'));
            tentativi--;

            if (numeriUtente.includes(numero)) {
                alert('numero già inserito');
                i--;
                tentativi++;
            } else if (isNaN(numero)) {
                alert('non è un numero!');
                i--;
                tentativi++;
            }
            else {
                numeriUtente.push(numero);

                if (numeriRandom.includes(numero)) {
                    numeriIndovinati.push(numero);
                    indovinati++;
                }

                //.. STAMPO I RISULTATI

                document.getElementById('numeri-utente').innerHTML += '<h2>' + numero + '</h2>';
                $('#numeri-utente').addClass('active');

                document.getElementById('numeri-computer').innerHTML += '<h2>' + numeriRandom[i] + '</h2>';
                $('#numeri-computer').addClass('active');

                document.getElementById('indovinati').innerHTML = indovinati;

                document.getElementById('numeri-indovinati').innerHTML = numeriIndovinati;

            }
 
        }
    } 
    else {
        $('.tempo').text(secondi);
    }
    secondi--;
}, 1000);

//.FUNZIONI

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}








