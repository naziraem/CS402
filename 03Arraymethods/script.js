// const users = [
//      {
//     id : 4,
//     age : 20,
//     surname : 'Malikli',
//     username : 'Nazira' ,
//     address : {
//     street : 'Nizami',
//     city : 'Baku',
//     country : 'Azerbaijan',
// }},
//      {
//     id : 6,
//     age : 28,
//     surname : 'Malikli',
//     username : 'Nazira' ,
//     address : {
//     street : '1 may',
//     city : 'Baku',
//     country : 'Azerbaijan',
// }},
//      {
//     id : 7,
//     age : 18,
//     surname : 'Malikli',
//     username : 'Nazira' ,
//     address : {
//     street : 'Mircelal',
//     city : 'Baku',
//     country : 'Azerbaijan',
// }},


// ]


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



  // const students = [ 'Yusif','Reshad','Nihad','Nazira']

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

// const studentsArr = ['Yusif','Reshad','Nihad','Nezire','Metn','Heyder','Rafig','Eli','Nizam','Xeyale','Abbas','Anar','Ulfet']

// const result = studentsArr.map(item=>`name: ${item}`).join(' ')
// console.log('array-', studentsArr);

///////////////////////////////////////////////////////////////////////////////////////////
// let fullName = 'Malikli Nazira Elman'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)


// let lettersArray = fullName.split('')
// console.log(lettersArray)


// let lastNameIndex = fullName.lastIndexOf(' ') + 1
// let lastName = fullName.slice(lastNameIndex)
// let firstName = fullName.slice(0, lastNameIndex ,1)
// let newFullName =  ' ' + firstName + lastName
// console.log(newFullName)

// let newArrayToString =Array.join('');
// console.log(newArrayToString)

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]


//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
//10) arraydaki en boyuk reqemin ilk indexini tapin
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
//14) 7 reqeminin indexleri cemini tapin.

// let mode5Count = arr.filter(num => num === 5).length
// console.log(mode5Count)

// let sumOfArray = arr.reduce((acc, num) => acc + num, 0)
// console.log(sumOfArray)

// let repeatedNumbersSorted = [...new Set(arr.filter(num => arr.indexOf(num) !== arr.lastIndexOf(num)))].sort((a, b) => a - b)
// console.log(repeatedNumbersSorted)

// let maxNumber = Math.max(...arr)
// let maxNumberCount = arr.filter(num => num === maxNumber).length
// console.log(maxNumber,maxNumberCount, )

// let yourName = "Nazira"
// let lettersInName = yourName.replace('').length;
// let isLettersInNameInArray = arr.includes(lettersInName);
// console.log(lettersInName, isLettersInNameInArray);

// let remainingTwoDigit = arr.slice(0, 3).reduce((acc, num) => acc % num, 2) % 10
// let remainingTwoDigitIndex = arr.indexOf(remainingTwoDigit)
// console.log(remainingTwoDigit, remainingTwoDigitIndex)

// let modeCounts = {}
// arr.forEach(num => {
//   modeCounts[num] = (modeCounts[num] || 0) + 1
// })
// let largestMode = parseInt(Object.keys(modeCounts).find(key => modeCounts[key] === Math.max(...Object.values(modeCounts))))
// let firstIndexOfLargestMode = arr.indexOf(largestMode)
// console.log(firstIndexOfLargestMode)

// let modeIndices = []
// Object.keys(modeCounts).forEach(key => {
//   if (modeCounts[key] === 4) {
//     modeIndices.push(arr.indexOf(parseInt(key)))
//   }
// })
// console.log(modeIndices)


// let mode5Indices = arr.reduce((indices, num, index) => {
//   if (num === 5) {
//     indices.push(index)
//   }
//   return indices
// }, [])
// let largestIndexMode5 = Math.max(...mode5Indices)
// let smallestIndexMode5 = Math.min(...mode5Indice)
// console.log(largestIndexMode5, smallestIndexMode5)

// let newArrayGreaterThan2 = arr.filter(num => num > 2)
// let lengthDifference = arr.length - newArrayGreaterThan2.length
// console.log(lengthDifference)

// let sumOfIndicesMode7 = arr.reduce((sum, num, index) => {
//   if (num === 7) {
//     sum += index
//   }
//   return sum
// }, 0)
// console.log(sumOfIndicesMode7)



// let arr2 = [
//   {
//       name: 'test',
//       key: 1
//   },
//   {
//       name: 'task',
//       key: 2
//   },
//   {
//       name: 'tanqo',
//       key: 3
//   },
//   {
//       name: 'like',
//       key: 4
//   },
//   {
//       name: 'task',
//       key: 5
//   },
//   {
//       name: 'trust',
//       key: 6
//   },
//   {
//       name: 'test',
//       key: 7
//   },
//   {
//       name: 'last',
//       key: 8
//   },
//   {
//       name: 'tanqo',
//       key: 9
//   },
//   {
//       name: 'elephant',
//       key: 10
//   },
//   {
//       name: 'love',
//       key: 11
//   },
//   {
//       name: 'small',
//       key: 12
//   },
//   {
//       name: 'little',
//       key: 13
//   },
// ]


//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.



// function filterObjectsStartWithT(arr) {
//   return arr.filter(obj => obj.name.startsWith('t'))
// }
// console.log(filterObjectsStartWithT(arr2))


// function countObjectsStartAndEndWithT(arr) {
//   return arr.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).length
// }
// console.log(countObjectsStartAndEndWithT(arr2))

// function sumKeysStartAndEndWithT(arr) {
//   return arr.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).reduce((sum, obj) => sum + obj.key, 0)
// }

// console.log(sumKeysStartAndEndWithT(arr2))


// function replaceNameWithSuperDev(arr) {
//   return arr.map(obj => obj.name.endsWith('e') ? { ...obj, name: 'SuperDev' } : obj)
// }

// console.log(replaceNameWithSuperDev(arr2))


// function keyOfLongestName(arr) {
//   let longestNameObj = arr.reduce((prev, current) => (prev.name.length > current.name.length) ? prev : current)
//   return longestNameObj.key
// }

// console.log(keyOfLongestName(arr2))



// function squareIndexOfLongestName(arr) {
//   let longestNameIndex = arr.findIndex(obj => obj.name.length === Math.max(...arr.map(o => o.name.length)));
//   return longestNameIndex ** 2;
// }

// console.log(squareIndexOfLongestName(arr2))


// function filterObjectsWithNameLength4(arr) {
//   return arr.filter(obj => obj.name.length === 4)
// }

// console.log(filterObjectsWithNameLength4(arr2))


// function nameOfObjectWithLargestKey(arr) {
//   let largestKeyObj = arr.reduce((prev, current) => (prev.key > current.key) ? prev : current)
//   return largestKeyObj.name
// }

// console.log(nameOfObjectWithLargestKey(arr2))

// function indicesOfObjectsWith2Ls(arr) {
//   return arr.reduce((indices, obj, index) => (obj.name.toLowerCase().split('l').length - 1 === 2) ? [...indices, index] : indices, [])
// }

// console.log(indicesOfObjectsWith2Ls(arr2));

// function keysOfObjectsWith2Ts(arr) {
//   return arr.reduce((keys, obj) => (obj.name.toLowerCase().split('t').length - 1 === 2) ? [...keys, obj.key] : keys, [])
// }
// console.log(keysOfObjectsWith2Ts(arr2))
