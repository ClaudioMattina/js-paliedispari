/* Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


/* fare scegliere all'utente pari o dispari */                  /* FATTOOO */
/* far inserire all'utente un numero da 1 a 5 */                /* FATTOOOOO */
/* generiamo un numero random da 1 a 5 per il PC */
/* sommiamo i due numeri */
/* capiamo se la somma è pari o dispari */
/* dichiariamo chi ha vinto */




let pariODispariUtente = prompt("scegli pari o dispari")


if(pariODispariUtente === "pari"){
    console.log("hai scelto pari")
}
else if(pariODispariUtente === "dispari"){
    console.log("hai scelto dispari")
}
else{
    console.log("scelta non valida.. scelgo io per te pari")
}

let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));



