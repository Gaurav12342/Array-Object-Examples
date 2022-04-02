/**
 *  write code which return  whose id 3
 */

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


const getData = (arrayData, userId) => {
    let result;
    result = arrayData.find((data) => {
        return data?.id === userId
    });

    console.log("result =>", result);
}

getData(data, 5);