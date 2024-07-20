const arr = [1,2,3,4];
const res = arr.reduce((prev, next) => {
    return prev + next * 2;
}, 0)
console.log(res)