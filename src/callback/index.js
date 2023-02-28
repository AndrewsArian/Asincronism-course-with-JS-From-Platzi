const promise = new Promise(function (resolve, reject) {
    resolve('Todo nice')
});

const cows = 11;

const countCows = new Promise(function (resolve, reject){
    if(cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There is not enough cows on the farm")
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'))