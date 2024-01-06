// console.log('Nazira Malikli');
// console.log('Reshad');








// firstname,lastName, age
// let firstname = 'Nazira'
// let lastName = 'Malikli'
// let age = '18'
// console.log(firstname);
// console.log(lastName);
// console.log(age);


// let username = 'Emin'
// let userAge = 20
// let isAdmin = true
// let salary = null
// let data


// console.log(username);
// console.log(userAge);
// console.log(isAdmin);
// console.log(salary);
// console.log(data);





// let age = 18
 let username = 'Nazira'
 //let isAdmin = true
//if (age >19) {
  //console.log('you are allowed!');
//} else if (username == 'Ulfat') {
  //  console.log('Name is correct');
 //} else if (isAdmin) {
//console.log('You are admin!');
    
//} else {
   // console.log('sorry!');
//}

//let age = 18
//switch (age) {
    //case 20:
      //  console.log('1');
      //  break;
   // case 23:
      //  console.log('2');
       // break;
   // case 18:
     //   console.log('3');
  //  case 18:
      //  console.log('4');
   // default:
     //   console.log('default');
      //  break;
// }


//switch (username) {
   // case 'Nezire':
    //    console.log('1');
    //    break;
    //case 'nazira':
    //    console.log('2');
    //    break;
   // case 'Nazira':
    //    console.log('3');
  //  case 'Nazira':
    //    console.log('4');
  //  default:
     //   console.log('default');
     //   break;
//}






let num = 35
let user = 'Fidan'

if (num > 30 && user == 'Fidan') {
    
    console.log('1');
}

/////////////////////////////////Task1////////////////////////////////////

// let a = 12
// let b = 8
// console.log(12 * 8);

// let x = 10 / 2
// console.log(x);

// let num1 = 20
// let num2 = 17
// console.log(num1 + num2);

// let name = 'Nazira';
// let surname = 'Malikli';
// let birthyear = 2005









// let reminder = 17 % 12
// console.log(reminder);

// let cityname = 'Baku'
// console.log(cityname);
// cityname = 'Gence'
// console.log(cityname);


//////////////////////////////////Task2//////////////////////////////////////

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // 2
// console.log(d); // 1
// console.log(b); //2

/////////////////////////////////Task3//////////////////////////////////////

// let a = 2;
// let x = 1 + (a *= 2)
// console.log(x); // 5

////////////////////////////////Task4//////////////////////////////////////

// console.log('test1', test); // undefined
// {
//     let test = "something"
//     console.log('test2', test); // something 
// }
// console.log('test3', test);  


// console.log('test1', test);  // undefined
// {
//     var test = "something"
//     console.log('test2', test); // something 
// }
// console.log('test3', test); // something 


/////////////////////////////////Task5//////////////////////////////////////


// let name = "Ulfat" // string
// let surname = Zakirli //
// let year = 2000 // number
// year = "2000" // string
// let city; // undefined
// let qualification = null // object
// let obj = { name: 'ulfat' } // object
// let arr = ['a', 'b', 'c'] // array

///////////////////////////////////Task6/////////////////////////////////////

// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)


// arr1.push(10, 88);

// console.log(arr1);


// arr1.splice(0, 2);
// console.log(arr1);


// arr1.unshift(0, 9, 11);
//  console.log(arr1);

//  arr1.shift();
//  arr1.shift();
//  arr1.shift();
//  arr1.shift();

//  console.log(arr1);


///////////////////////////Task7//////////////////////////////

// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

// 1.Console values from "Rufet" to "Fuad"
// 2.Change Gulshen to Rovshen 
// 3.Console each name with map
// 4.Console only names which is Anar
// 5.Console all names where name is Anar change it to "Perviz"
// 6.Console second to last value of arr2
// 7.Console length of arr2


// console.log(arr2.slice(2, 8));

// arr2[4] = "Rovshen";
// console.log(arr2);

// arr2.map(name => console.log(name));


// console.log(arr2[arr2.length - 2]);

// console.log(arr2.length);


//////////////////////////////Task8///////////////////////

// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// (use typeof), like this: filter((item) => typeof item === 'string')

// 1.Show only numbers
// 2.Show only true values
// 3.Show only false values
// 4.Show only strings

// const numbers = arr3.filter(item => typeof item === 'number');
// console.log(numbers);

// const trueValues = arr3.filter(item => typeof item === 'boolean' && item === true);
// console.log(trueValues);

// const falseValues = arr3.filter(item => typeof item === 'boolean' && item === false);
// console.log(falseValues);

// const strings = arr3.filter(item => typeof item === 'string');
// console.log(strings);


////////////// TASK 8 //////////////
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)
// 2.Console (only odd numbers)

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

////////////// TASK 9 //////////////
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value false value add to it value+ is false value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is false value"]

// 2.Sum all numbers of arr4
// 3.Count only the values that are true
// 4.Count only the values that are string
// 5.Count only the values that are false

// const sumOfNumbers = arr4.reduce((sum, value) => typeof value === 'number' ? sum + value : sum, 0);
// console.log(sumOfNumbers);

// const countTrueValues = arr4.filter(value => value === true).length;
// console.log(countTrueValues);

// const countStringValues = arr4.filter(value => typeof value === 'string').length;
// console.log(countStringValues);

// const countFalseValues = arr4.filter(value => value === false).length;
// console.log(countFalseValues);


////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"

// const obj = {
//     email: 'ulfat@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'Nizami 22',
//             education: {
//                 "uni name": "ADNSU",
//             }
//         }
//     }
// }

// 3.Console gender
// 4.Console city
// 5.Console uni name

// const person = {
//     name: 'Nazira',
//     surname: 'Malikli',
//     age: 18,
//     city: 'Baku'
// };

// person.name = 'John';

// console.log(person);

// console.log(obj.info.gender);

// console.log(obj.info.loc.city);

// console.log(obj.info.loc.education["uni name"]);






