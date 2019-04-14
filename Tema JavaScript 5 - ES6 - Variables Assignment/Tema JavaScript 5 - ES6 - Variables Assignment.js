// 1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
// sumNumbers = (numbers) => {
//   let sumResult = 0 ;
//   for(let i = 1; i <= numbers; i++) {
//     sumResult += i;
//   } 
// return sumResult;
// }
// console.log(sumNumbers(3));

// 2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
// longestWord = (string) => {
//   let str = string.split(" "),
//       longest = 0,
//       word = null;
//     for (let i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// console.log(longestWord("I love to learn javaScript"));

// 3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
// reverseString = (str) => {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Wantsome"));

// 4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
// changeLetter= (str) => {
//     for (let i = 0; i < str.length; i++) {
//         if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
//             str = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 1));
//         }
//     }
//     return str;
// }
// console.log(changeLetter("strawberry"))

// 5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
// Exemplu: input: 64  ->  output: 1:4
// convertTime = (number) => { 
//    let hours = Math.floor(number / 60),
//        minutes = number % 60;
//   return hours + ":" + minutes;         
// }
// console.log(convertTime(64));

// 6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
// alphabeticalOrder = (str) => { 
//     return str.split('').sort().join('');
// }
// console.log(alphabeticalOrder("I wish I had enough time to work in javascript"));

// 7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
// Exemplu: input: "+a+b+c+"   ->   output: true
// Exemply: input: "+ab+c+d+"  ->   output: false
//Acest exercitiu nu am reusit sa il finalizez
// function charcterAround(str) {
//   var str1=str.split("");
//   var result="+";
//   for (var i=0;i<str.length; i++) {
// if((str1[i]%2===0)==result ){
//   return true;
// }
// }                       }
// console.log(charcterAround("+a+v+n+"))







