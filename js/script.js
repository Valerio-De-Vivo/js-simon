



//. IMPOSTO IL TIMER 

var secondi= 30;

    var count = setInterval(() => {
        if ( secondi == 0) {
            clearInterval(count);
        } else {
            $('.tempo').text(secondi);
        }
        secondi--;
    }, 1000);