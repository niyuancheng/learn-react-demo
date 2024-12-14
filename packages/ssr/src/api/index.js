import data from "./data.json" assert { type: "json" }
export const fetchList = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data.result)
        }, 3000)
    })
}