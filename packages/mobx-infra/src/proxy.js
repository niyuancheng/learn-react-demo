const arr = [1,2,3,4];
//* vue2响应式核心代码
function defineReactive(obj, key) {
    let target = obj[key];
    Object.defineProperty(obj, key, {
        get() {
            console.log('get')
            return target;
        },
        set(value) {
            console.log('set', value)
            target = value;
        }
    });
}
for (let key in arr) {
    defineReactive(arr, key);
}

console.log(arr[1]);
arr[1] = 100;
console.log(arr[1])