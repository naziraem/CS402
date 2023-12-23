const users = [
     {
    id : 4,
    age : 20,
    surname : 'Malikli',
    username : 'Nazira' ,
    address : {
    street : 'Nizami',
    city : 'Baku',
    country : 'Azerbaijan',
}},
     {
    id : 6,
    age : 28,
    surname : 'Malikli',
    username : 'Nazira' ,
    address : {
    street : '1 may',
    city : 'Baku',
    country : 'Azerbaijan',
}},
     {
    id : 7,
    age : 18,
    surname : 'Malikli',
    username : 'Nazira' ,
    address : {
    street : 'Mircelal',
    city : 'Baku',
    country : 'Azerbaijan',
}},


]


// let result = users.reduce((acc,curr,index) => acc + index, 0)
// console.log(result);

// users.sort((a,b) => a.age - b.age)
// console.log(users);

// users.sort((a,b) => a.street - b.street)
// console.log(users);


// const result = users.map((users) => ({...user,age: 'myAge' + users.address.age}))

// console.log(result);

// 

//   const result = users.filter((item) => item.username.length >= 6)



  const students = [ 'Yusif','Reshad','Nihad','Nazira']

//   console.log(students.filter(item => item === 'Yusif'));

//  console.log(students[0]);

// console.log(students.slice(0,-1));

// let user = 'nazira '
// console.log(user.toUpperCase);

// console.log(user.toLowerCase);

// let result = user.slice(0,1).toUpperCase() + user.slice(1).toLowerCase()
// let result = user.slice(1).toUpperCase()
// let result =user.slice(0,1).toUpperCase()+ user.slice(1).toLowerCase()
// let result =user.slice(0,5).toLowerCase()+ user.slice(5).toUpperCase()
// let result =user.slice(0,5).toLowerCase()+ user.slice(-1).toUpperCase()



// let result = user.slice(0,1).toUpperCase() + user.slice(1,5).toLowerCase() + " " + user.slice(6,7).toUpperCase() + user.slice(7)

// console.log(result);

// let user = 'ulfat zakirli'

// const result = user.split('l')

// const result = user.split(' ')

// const result = user.split(',')
// console.log(result);

const studentsArr = ['Yusif','Reshad','Nihad','Nezire','Metn','Heyder','Rafig','Eli','Nizam','Xeyale','Abbas','Anar','Ulfet']

const result = studentsArr.map(item=>`name: ${item}`).join(' ')
console.log('array-', studentsArr);
