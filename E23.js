// Getting array element object from given user value.

// Using map
let ans = {};
const getValueUsingMap = (data, userValue) => {
    data?.map((dd, index) => {
        if (dd["name"] == userValue) {
            ans = dd;
        }
    })
}

// Using for loop
let ans1 = {};
const getValueUsingForLoop = (data, userValue) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i]['name'] === userValue) {
            ans1 = data[i];
        }
    }
}

// Using for of loop
let ans2 = {};
const getValueUsingForOfLoop = (data, userValue) => {
    for (const userData of data) {
        if (userData['name'] === userValue) {
            ans2 = userData;
        }
    }
}

// Using for in loop
let ans3 = {};
const getValueUsingForInLoop = (data, userValue) => {
    for (const userData in data) {
        if (data[userData]['name'] === userValue) {
            ans3 = data[userData];
        }
    }
}

const userArray = [
    { id: 1, name: "Test", city: "surat" },
    { id: 2, name: "Test-1", city: "bardoli" },
    { id: 3, name: "Test-2", city: "Palsana" },
    { id: 4, name: "Test-3", city: "Piplod" },
    { id: 5, name: "Test-4", city: "Pune" },
];

getValueUsingMap(userArray, "Test-4");
getValueUsingForLoop(userArray, "Test-3");
getValueUsingForOfLoop(userArray, "Test-2");
getValueUsingForInLoop(userArray, "Test");

console.log("Ans =>", ans);
console.log("Ans-1 =>", ans1);
console.log("Ans-2 =>", ans2);
console.log("Ans-3 =>", ans3);


