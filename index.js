// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// strumenti conosciuti :
// -let
// -console log
// -operatori aritmetici e di comparazione relazionali e logici
// -string
// -number
// -conditionals if/elseif/else
// -ciclo for

// 1 preparazione
// creo la struttura del ciclo for

// for () {

// }

// 2 raccolta Dati
// nel ciclo for definisco la variabile i e loggo in per assicurarmi che non ci siano errori in console

// for ( let i = 1; i<=100; i++) {
// console.log(i);
// }

// 3 elaborazione dati
// All'interno del blocco ciclo for stabilisco i numeri multipli di 3 e multipli di 5 e loggo FizzBuzz,
// poi i numeri multipli di 3 e loggo Fizz
// poi i numeri multipli di 5 e loggo Buzz
// poi loggo i per ottenere i numeri restanti

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  }
  else if (i % 3 == 0) {
    console.log('Fizz');
  }
}
