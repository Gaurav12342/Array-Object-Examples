// New keywork create object with ref or chain __proto / [[prototype]]
// Create empty {} object with this.     this = {}
// Return this

function userData(firstName, lastName, email, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    return this;
}
userData.prototype.about = function () {
    return `${this.firstName} is ${this.age} years.`
}
userData.prototype.is18 = function () {
    return this.age >= 18
};
const ans = new userData("Gaurav", "Surat", "gaurav@gmail.com", "20")
console.log("data =>", ans);
console.log("about =>", ans.about());
console.log("is18 =>", ans.is18());

// hasOwnProperty is used to get function data with prototype 
for (const key in ans) {
    if (ans.hasOwnProperty(key)) {
        console.log("hasOwnProperty =>", key);
    }
}