// const userData = {
//     firstName: "Gaurav",
//     lastName: "Surat",
//     email: "gaurav@gmail.com",
//     age: "20",
//     about: () => {
//         return `${this.firstName} is ${this.age} years.`
//     },
//     is18: () => {
//         return this.age >= 18
//     }
// };


// const userObj = Object.create(userData);
// userObj['country'] = "India";
// console.log("userObj", userObj);


// const userMethods = {
//     about: (firstName, age) => {
//         return `${firstName} is ${age} years.`
//     },
//     is18: (age) => {
//         return age >= 18
//     }
// }

const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years.`
    },
    is18: function () {
        return this.age >= 18
    },
    sing: function () {
        return "twinkle twinkle littel star."
    },
    userHobby: "listning music."
}

// Object.create is create empty object with object ref and object chaining like __proto__ or [[prototype]]
const userFun = (firstName, lastName, email, age) => {
    const users = Object.create(userMethods);
    users.firstName = firstName;
    users.lastName = lastName;
    users.email = email;
    users.age = age;
    return users;
}

const ans = userFun("Gaurav", "Surat", "gaurav@gmail.com", "20");
console.log("Ans =>", ans);
console.log("Ans-1 =>", ans.about());
console.log("Ans-2 =>", ans.is18());
console.log("Ans-3 =>", ans.sing());
console.log("Ans-4 =>", ans.userHobby);