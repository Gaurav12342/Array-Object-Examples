const pairArray = (arr) => {
    arr.reduce((cur, nex) => {
        console.log("---", cur[nex]);
    }, {})

}

const arrayData = [2, 2, 4, 3, 3];
pairArray(arrayData);