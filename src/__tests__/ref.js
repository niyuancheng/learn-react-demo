function Dot(container) {
    setTimeout(() => {
        console.log('@@@', container);
    }, 1000)
}

function App() {
    let obj = {
        current: {a: 100},
    }

    Dot(obj);
    setTimeout(() => {
        obj.current = {b: 100}
    })
}

App()