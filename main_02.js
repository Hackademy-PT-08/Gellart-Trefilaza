
//Eexercise_01

// Scrivi un programma che dati i seguenti numeri: 10, 20, 35, 50, 70
// restituisca in output la somma e la media.

// let a = 10;
// let b = 20;
// let c = 35;
// let d = 50;
// let e = 70;

// let sum = a + b + c + d + e;
// let average = sum / 5;
// console.log(`The sum is ${sum}, and the average is ${average}`);

 

//exercise_02

// Riscrivi un programma come l’esercizio precedente ma che 
// utilizzi 5 numeri inseriti manualmente dall’utente tramite il comando prompt.

// let num1 = prompt(`Write a number`)*1;
// let num2 = prompt(`Write a number`)*1;
// let num3 = prompt(`Write a number`)*1;
// let num4 = prompt(`Write a number`)*1;
// let num5 = prompt(`Write a number`)*1;
 
// let mathSum = num1 + num2 + num3 + num4 + num5;
// console.log( parseFloat(mathSum));

// let average = Math.floor(mathSum / 5);
// console.log(`The sum is ${mathSum}, and the average is ${average}`);  

 



//Eexercise_03

// creare 4 variabili temperature con valore numerico: **`tempBari**, **tempNaples**, **tempRome**, **tempMilan**`.
// stampare a console: *`la temperatura più alta è ...`*
// stampare a console: *`la temperatura più bassa è ...`*

// //variables with Math.random - Math.floor methods
// let tempBari = Math.floor(Math.random() * 10);
// let tempNaples = Math.floor(Math.random() * 10);
// let tempRome = Math.floor(Math.random() * 10);
// let tempMilan = Math.floor(Math.random() * 10);

// //console.log of each variables
// console.log(tempBari);

// console.log(tempNaples);

// console.log(tempRome);

// console.log(tempMilan);

// //console.log of the higher temperature using the Math.max method 
// console.log( Math.max(tempBari, tempNaples, tempRome, tempMilan) + `` + `is the higher temperature`);

// //console.log of the lower temperature using the Math.min method 
// console.log( Math.min(tempBari, tempNaples, tempRome, tempMilan) + `` + `is the lower temperature`);




//Exercise_04

// Scrivi un programma che dato l'anno corrente e un anno di nascita determini:

// - l'età della persona
// - quanti anni sono necessari per raggiungere i 100
// - restituisca in output (`console.log` o `alert`) entrambi i risultati.

// //variables for the current year and when the user is born
// let currentYear = 2023;
// let userYearBorn = prompt(`Write the year youre where born`);

// //variable for the user age
// let userAge = currentYear - userYearBorn;
// console.log( `You have ${userAge} years`);

// //years needed for the 100
// let yearFor100 = 100 - userAge;
// console.log(`You need ${yearFor100} for going to 100 year`);
 
   



//Exercise_05

// Tramite il prompt memorizzare il nome
// di “utente 1” e di “utente 2” in delle rispettive variabili.
// Creare una variabile per il risultato finale che contenga il check sulla condizione se il nome
// dell’utente 1 è uguale al nome dell’utente 2 e restituisca in console.log un booleano(true / false).

// //variable user_1
// let user1 = prompt(`Write your name`);

// //variable user_2
// let user2 = prompt(`Write your name`);

// let check = user1 === user2;
// console.log(check);





//Exercise_06 (AIUTO MARCO)

// let phoneNumber = Math.floor(Math.random()*10000000000)
// console.log(phoneNumber);

// console.log( phoneNumber.replace(/\d/g, '*')) 
 



//Exercise_07

// Scrivi un programma che dato:

// - Un numero totale di gatti
// - Il numero dei gatti presenti in ogni fila

// Restituisca in output:

// - Il numero totale delle file
// - il numero di gatti mancanti per completare una nuova fila

// //total cats
// let cats = 28;
// console.log(`There are ${cats} cats`);

// //cats on very line
// let catsOnEveryLine = 6;
// console.log(`There are ${catsOnEveryLine} cats on very line`);

// //total lines
// let totalLine = Math.floor(cats / catsOnEveryLine);
// console.log(`Total line ${totalLine}`);

// //remanents cats
// let remanentsCats = cats - (catsOnEveryLine * totalLine) ;
// console.log(`There are ${remanentsCats} remanents cats`);

// //cats for a new line
// let catsForNewLine = catsOnEveryLine - 4;
// console.log(`We need ${catsForNewLine} for a new line`);



//Exercise_08

// Scrivi un programma 
// che generi un numero intero randomico da 1 a 6.

// let randomNumber = Math.floor(Math.random() * 6 +1);
// console.log(randomNumber);     
