/**
 *  write code which add 2 years of every person
 * */

data = [
    {
        id: 1,
        name: "shiva",
        age: 20,
        address: {
            city: "surat",
            state: "Gujarat",
            zip: "395004",
        },
        hobby: ["dance", "music"],
    },
    {
        id: 2,
        name: "mahadev",
        age: 22,
        address: {
            city: "bardoli",
            state: "Gujarat",
            zip: "395004",
        },
        hobby: ["cricket", "music"],
    },
    {
        id: 3,
        name: "Rama",
        age: 24,
        address: {
            city: "Surat",
            state: "Gujarat",
            zip: "395004",
        },
        hobby: ["cricket", "music"],
    },
    {
        id: 4,
        name: "Arya",
        age: 25,
        address: {
            city: "surat",
            state: "Gujarat",
            zip: "395004",
        },
        hobby: ["gaming", "music"],
    },
    {
        id: 5,
        name: "Jay",
        age: 25,
        address: {
            city: "bardoli",
            state: "Gujarat",
            zip: "395004",
        },
        hobby: ["singing", "music"],
    },
];


const addingYears = (arrayData, yearsData) => {
    arrayData.map((dd) => {
        dd.years = yearsData
    });
    console.log("Result =>", arrayData);
}

const yearsArray = [2020, 2021];
addingYears(data, yearsArray);