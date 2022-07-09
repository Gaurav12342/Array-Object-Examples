// Function provide free space which is prototype.
// Only function provide prototype properties.
// Function ek free space provde karta he jisme ham key value add kar sakte he. 

function userData(firstName, lastName, email, age) {
    const users = Object.create(userData.prototype);
    users.firstName = firstName;
    users.lastName = lastName;
    users.email = email;
    users.age = age;
    return users;
}
userData.prototype.about = (firstName, age) => {
    return `${firstName} is ${age} years.`
};
userData.prototype.is18 = (age) => {
    return age >= 18
};
console.log("data =>", userData("Gaurav", "Surat", "gaurav@gmail.com", "20"));
console.log("about =>", userData.prototype.about("Sanjay", "50"));
console.log("is18 =>", userData.prototype.is18("20"));