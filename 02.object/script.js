// const obj2 = {
//     id:10,
//     firstname: 'Nazira',
//     lastname: 'Malikli',
//     age: 18,
//     address: {
//         street: 'Nizami',
//         city:'Baku',
//     },

    //position: 'Mern stack',
   // info: {
      //  uni:'ADNSU',
       // qualification: 'Device eng',
       // isAdmin:'true',
   // },
//}

//console.log(obj2.id + obj2.age);

//delete obj2.street
//delete obj2.position

//console.log(obj2.id);
//console.log(obj2.firstname);
//console.log(obj2.lastname);
//console.log(obj2.age);
//console.log(obj2.address.street.city);
//console.log(obj2.position);
//console.log(obj2.info.uni.qualifiction);

//obj2.firstname = 'Lale'
//obj2.lastname = 'Eliyeva'
//obj2.age = '20'




// const arr1 = new Array ()


// const arr2 = [18,'nazira','malikli','fidan','false','true']

// console.log(arr2[2]);
// console.log(arr2.length-2);

// console.log(arr2.at(2));
// console.log(arr2.at(-2));



// const data = [5,'fidan',true]
// data.push(7,9,4,)
// data.unshift(false)

// console.log(data);


const students = [
    {
        id: 1,
        name: 'Nazira',
        surname:'Malikli',
        age:18
    },

    {
        id:2,
        name:'Nihad',
        surname:'Eliyev',
        age:28
    },
    {
        id:3,
        name:'Lale',
        surname:'Eliyeva',
        age:24
    },
]

// students.map((item,index) => console.log(index))
// students.map((item,index) => console.log(item.age))



// // console.log(studentd);

// // filyer method

// const result = students.filter(item => item.age >= 22 && item.age <= 25)
// console.log(result);


// let sum = 0
// const result = data.map((item,index) => sum -= index)
// console.log(result);
// console.log(sum);





const result1 = students.find( item => Item.surname == 'Malikli')
