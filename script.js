

//Задача на кол-во ключей обьекта


// student = {
//     firstName: 'Petya',
//     lastName: 'Petrov',
//     age: 30,
//     city:'Kyiv',
// };
// sumKeys = (object) =>{
//     let sumKeys= 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             sumKeys++;
//         }
//     }
//     return sumKeys
// }

//2-ой вариант
// sumKeys = (object) => {
//     return Object.keys(object).length;
// }

//alert(sumKeys(student));




//////////////////////////////////////////////////////////////////////////


// // Задача на копирование обьекта.........


student = {
    firstName: 'Petya',
    lastName: 'Petrov',
    age: 30,
    city: 'Odessa',
};


//////////////////////////////////////////////
//Вариант №1 (функция)
// objectCopy = (object) => {
//     let objectCopy = {};
//     for (key in object) {
//         objectCopy[key] = object[key];
//     }
//     return objectCopy;
// }
// console.log(student);
// console.log(objectCopy(student));

//Вариант №2
// let objectCopy = Object.assign({},student);
// console.log(objectCopy);

//Вариант №3
// let objectCopy = JSON.parse(JSON.stringify(student));
// console.log(objectCopy);





////////////////////////////////////////////////////////////////////////////

// createStudent = (firstName, lastName, age, city) => {
//     return {
//         firstName,
//         lastName,
//         age,
//         city,
//     }
// };
// console.log(createStudent('Ivan', 'Ivanov', 25));
// console.log(createStudent('Andrew', 'Sidorov', 45, 'Lviv'));




