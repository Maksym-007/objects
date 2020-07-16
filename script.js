//С тестами я еще не разобрался!


//Задача на кол-во ключей обьекта


// student = {
//     firstName: 'Petya',
//     lastName: 'Petrov',
//     age: 30,
//     city: 'Kyiv',
// };
// sumKeys = (student) => {
//     return Object.keys(student).length;
// }
// alert(sumKeys(student));

// ///////
// Object.keys(student);

// console.log(Object.keys(student));
// //////


//////////////////////////////////////////////////////////////////////////


// // Задача на копирование обьекта.........


 student = {
    firstName: 'Petya',
    lastName: 'Petrov',
    age: 30,
    city: 'Kyiv',
    id: '',
};
copyStudent = (student) => {
    let newStudent = {};

    for (key in student) {
        newStudent[key] = student[key];
    }
    return newStudent;
}

console.log(copyStudent(student));


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







