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



/* creo un input dove l'utente sceglie pari o dispari */
let pariODispariUtente = prompt("scegli pari o dispari")


/* condizione dove: se l'utente sceglie pari scrivi pari, se sceglie dispari scrivi dispari, se sceglie qualcosaltro scrivi ... */
if(pariODispariUtente === "pari"){
    console.log("hai scelto pari")
}
else if(pariODispariUtente === "dispari"){
    console.log("hai scelto dispari")
}
else{
    console.log("scelta non valida.. scelgo io per te pari")
}


/* creo un input dove l'utente sceglie un numero da 1 a 5 */
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("l'utente ha scelto: " + numeroUtente)




/* COME HO FATTO IO (SBAGLIANDO QUALCOSA) */
/* function randomNumber(variabile){
   return Math.floor(Math.random()* 5) + 1;
}
let numeroRandomPc = randomNumber; */


/* funzione che mi da un numero random da un valore minimo ad un valore massimo */
function randomNumber(minValue, maxValue){
    return (Math.floor(Math.random() * (( maxValue + 1) -minValue) + minValue));           /* SENZA FUNZIONI */
                                                                                           /* let numeroRandomPc = Math.floor(Math.random()* 5) + 1;
                                                                                           console.log("il pc ha generato: " + numeroRandomPc) */
};


/* creo una variabile ( che sarà il numero del pc ) che da un numero random da 1 a 5 utilizzando la funzionme creata prima  */
let numeroRandomPc = randomNumber(1, 5);

console.log("il pc ha generato: " + numeroRandomPc);




/* creo una varibile somma che addizioni il valore dell'utente e del pc */
let somma = numeroRandomPc + numeroUtente;
console.log("la somma è:" + somma);


/* creo una funzione che stabilisce se un numero è pari o no (nel caso lo fosse da true nel caso non lo fosse da false) */
function isEven (number){
    if(number % 2 == 0){
        return true
    }
    else{
        return false
    }
};


console.log(isEven(somma))

/* condizione dove se l'utente sceglie pari e la somma dei due valori è pari.. allora stampa "ha vinto l'utente" */
if(pariODispariUtente=="pari" && isEven(somma)==true){
    console.log("ha vinto l'utente")
}

/* condizione dove se l'utente sceglie dispari e la somma viene false (duqnue non è pari) allora stampa vince l'utente*/
else if (pariODispariUtente=="dispari" && isEven(somma)==false){
    console.log("ha vinto l'utente")
}

/* in tutti gli altri casi ha vinto il pc */
else{
    console.log("ha vinto il pc")
}



