/**
 *  write code which delete record of whose name is mahadev */


// Notes :
//  findIndex : "I want to find the index in an array of objects, with the key".
//  indexOf : "I want to find the index in a simple array".


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

const deleteRecord = (data, userName) => {
    let getIndex = data.findIndex((dd) => {
        return dd?.name === userName
    });
    data.splice(getIndex, 1);
    console.log("finalResult =>", data);
}

deleteRecord(data, "mahadev");