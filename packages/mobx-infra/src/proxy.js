const arr = [1,2,3,4];
//* vue2响应式核心代码
function defineReactiveV2(obj, key) {
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

function defineReactiveV3(obj) {
    return new Proxy(obj, {
        get(target, key) {
            console.log('get', target, key)
            return Reflect.get(target, key)
        },
        set(target, key, newVal) {
            console.log('set', target, key, newVal);
            return Reflect.set(target, key, newVal);
        },
        deleteProperty(target, key) {
            console.log('delete', target, key);
            return Reflect.deleteProperty(target, key)
        },
    })
}
for (let key in arr) {
    defineReactiveV2(arr, key);
}

console.log(arr[1]);
arr[1] = 100;
console.log(arr[1])