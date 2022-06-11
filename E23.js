// Getting array element object from given user value.

// Using map
let ans = {};
const getValueUsingMap = (data, userValue) => {
    data?.map((dd, index) => {
        if (dd["name"] == userValue) {
            return ans = dd;
        }
    })
}

// Using for loop
let ans1 = {};
const getValueUsingLoop = (data, userValue) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i]['name'] === userValue) {
            return ans1 = data[i];
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
getValueUsingLoop(userArray, "Test-3");

console.log("Ans =>", ans);
console.log("Ans-1 =>", ans1);


