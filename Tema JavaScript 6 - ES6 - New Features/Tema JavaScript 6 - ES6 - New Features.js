// EXERCITIUL NR.1
// Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
// ES5:
// function stringCamelCase (str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//  return str.join(' ');
// }
// console.log(stringCamelCase("i am superman"))
// ES6:
// const stringCamelCase = (str) => {
//   str = str.toLowerCase().split(' ');
//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//  return str.join(' ');
// }
// console.log(stringCamelCase("i am superman"))



// EXERCITIUL NR.2
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
// ES5:
// function palindrom (str) {
//   return str == str.split('').reverse().join('');
// }
// console.log(palindrom("cojoc"))
// ES6:
//  palindrom = (str) => {
//   return str == str.split('').reverse().join('');
// }
// console.log(palindrom("cojoc"))



// EXERCITIUL NR.3
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

// ES5:
// function maxNumber(arr) {
//   var arr1 = [0,0,0];
//   for(var i=0; i<arr.length; i++) {
//     for(var subi = 0; subi < arr[i].length; subi++) {
//       if(arr[i][subi] > arr1[i]) { 
//         arr1[i] = arr[i][subi];
//       }
//     }
//   }
//   return arr1;
// }
// console.log(maxNumber([[8, 7, 1, 6], [10, 99, 56, 75], [101,856,358,957]]));

// ES6:
//  maxNumber = (arr) => {
//   let arr1 = [0,0,0];
//   for(let i=0; i<arr.length; i++) {
//     for(var subi = 0; subi < arr[i].length; subi++) {
//       if(arr[i][subi] > arr1[i]) { 
//         arr1[i] = arr[i][subi];
//       }
//     }
//   }
//   return arr.map(arr1 => Math.max(...arr1));
// }
// console.log(maxNumber([[8, 7, 1, 6], [10, 99, 56, 75], [101,856,358,957],[54,545,545]]));


// EXERCITIUL NR.4
// Implementati o functie care face reverse la un string
// ES5:
// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverse("Wantsome"));
// ES6:
//  reverse = (str) => str.split("").reverse().join("");
// console.log(reverse("Wantsome"));


// EXERCITIUL NR.5
// ES5:
// function factorial (nr) {
//   var result=1;
//   for(i=1;i<=nr;i++) {
//     result=result*i;
//   }
//   return result;
// }
// console.log(factorial(4))
// ES6:
// factorial =(nr) =>!(nr > 1) ? 1 : factorial(nr - 1) * nr;
// console.log(factorial(0));


// EX.1(www.codewars.com)
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// findShort = (s) => {
//   s = s.split(' ');
//  let x = [],
//      y = 0;
//     for (var i = 0; i < s.length; ++i){
//         x = s[i];
//     if (y == 0 || x.length < y){
//         y = x.length;
//       };         
//     };
//   return y;
// }
// console.log(findShort("I try to learn JavaScript"))  //result 1


// EX.2(www.codewars.com)
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// var format = "(xxx) xxx-xxxx";
  
// createPhoneNumber = (numbers) => {
// let format = "(xxx) xxx-xxxx";  
//   for(let i = 0; i < numbers.length; i++) {
//     format = format.replace('x', numbers[i]);
//   }  
//   return format;  
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))  //result "(123) 456-7890"



// EX.3(www.codewars.com)
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last 
// two names, which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])
// // returns 'Bart'
// list([])
// // returns '' 
list = (names) => {
	let result = "";	
	if (names.length === 1) {
		return names[0].name;
	} 
  else if (names.length === 2) {
		return names[0].name + " & " + names[1].name;
	} 
  else if (names.length === 0) {
		return "";
	} 
  else {
    for (let i = 0; i < names.length - 2; i++) {
      result += names[i].name + ", ";
    }
    result = result + names[names.length-2].name + " & " + names[names.length-1].name	
    return result;
  }
}
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))


// EX.4(www.codewars.com)
// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// squareDigits = (num) => {
//   let strNum = String(num),
//       newNum ='';  
//   for (i = 0; i <= strNum.length-1 ; i++) {
//     newNum += strNum[i]*strNum[i];
//   }  
//   return Number(newNum);  
// }
// console.log(squareDigits(9119))



// EX.5(www.codewars.com)
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// findOdd = (A) => {
//   let count = 0;
//   for(var i = 0; i < A.length; i++) {
//     for(let j = 0; j < A.length; j++) {
//           if(A[i] == A[j]) {
//             count++;
//           }
//         }
//     if (count % 2 !== 0) {
//         return A[i];
//     }
//   }
//   count == 0;
//   return 0;
// }
// console.log(findOdd( [11,29,1,30,11,78,90,1,30,1,29,11]))






