/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Immagina che i datatype in JavaScript siano come diverse scatole dove puoi mettere vari tipi di cose. Ogni scatola è fatta apposta per contenere un tipo particolare di oggetto. Vediamo insieme quali sono le principali scatole (datatype) e cosa puoi metterci dentro:

Numero (Number)

È come una scatola per i numeri. Dentro ci puoi mettere qualsiasi tipo di numero: numeri interi (come 5 o 100) o numeri con la virgola (come 3.14 o 0.5).
Esempio: let numero = 7;
Qui abbiamo messo il numero 7 nella scatola dei numeri.
Testo (String)

Questa scatola serve per contenere parole, frasi o anche solo singole lettere. Le parole sono come dei pezzi di testo racchiusi tra virgolette.
Esempio: let parola = "Ciao"; Qui abbiamo messo la parola "Ciao" nella scatola delle parole.
Vero o Falso (Boolean)

Questa è una scatola molto semplice: può contenere solo due possibili risposte, o vero (true) o falso (false). È come un interruttore, acceso o spento.
Esempio: let luceAccesa = true;
Qui abbiamo messo l'informazione che la luce è accesa (vero).
Niente (Null)

Questa scatola è vuota. Serve per dire: "Qui non c'è niente". È come se dicessi: "Aspetta, per ora non c’è nulla da mettere qui".
Esempio: let nessunValore = null;
Qui diciamo che, per ora, la scatola è vuota.
Indefinito (Undefined)

È una scatola che esiste, ma nessuno ha ancora deciso cosa ci andrà dentro. È come se tu avessi una scatola, ma non hai ancora messo nulla.
Esempio: let qualcosa;
Qui abbiamo creato la scatola ma non ci abbiamo messo nulla dentro, quindi è indefinita. */


console.log("This list shows primary data types in JS:");
let myName1 = "Mahdi";
console.log("String:",myName1);

let number = 35;
console.log("Number:",number);

let boolean = ("True/False");
console.log("Boolean:",boolean);

let Null = null
console.log(Null);

let y = undefined;
console.log(y);



/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Mahdi";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sum = 12+20;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Nazari";
console.log(myName);
//
const constantName = "Mahdi";
console.log(constantName);
//constantName = "Nazari";
console.log(constantName);
//
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sub = x / 4;
console.log(sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);

console.log(name1.toLowerCase() === name2.toLowerCase());
