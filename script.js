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
/* generiamo un numero random da 1 a 5 per il PC */             /* FATTOOOO */
/* sommiamo i due numeri */                                     /* FATTOOOOO */
/* capiamo se la somma è pari o dispari */                      /* FATTOOOOOOO */
/* dichiariamo chi ha vinto */                                  /* OLLèèèèèèè DAJEEEEE */




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
console.log("l'utente ha scelto: " + numeroUtente)




/* COME HO FATTO IO (SBAGLIANDO QUALCOSA) */
/* function randomNumber(variabile){
   return Math.floor(Math.random()* 5) + 1;
}
let numeroRandomPc = randomNumber; */



function randomNumber(minValue, maxValue){
    return (Math.floor(Math.random() * (( maxValue + 1) -minValue) + minValue));           /* SENZA FUNZIONI */
                                                                                           /* let numeroRandomPc = Math.floor(Math.random()* 5) + 1;
                                                                                           console.log("il pc ha generato: " + numeroRandomPc) */
};

let numeroRandomPc = randomNumber(1, 5);

console.log("il pc ha generato: " + numeroRandomPc);





let somma = numeroRandomPc + numeroUtente;
console.log("la somma è:" + somma);


function isEven (number){
    if(number % 2 == 0){
        return true
    }
    else{
        return false
    }
};
console.log(isEven(somma))

if(pariODispariUtente=="pari" && isEven(somma)==true){
    console.log("ha vinto l'utente")
}
else if (pariODispariUtente=="dispari" && isEven(somma)==false){
    console.log("ha vinto l'utente")
}
else{
    console.log("ha vinto il pc")
}



