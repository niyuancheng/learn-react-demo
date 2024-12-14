import React, { Suspense, use } from "react"
import { fetchList } from "../api"
import { Button } from "../components/Button"
export const Home = () => {
    return (
        <>
            <Button />
            <Suspense fallback={<Loading />}>
                <Artist />
            </Suspense>
        </>
    )
}

const Artist = () => {
    const data = use(fetchList());
    console.log('data', data)
    return (
        <div>
            <h1 className="text-4xl">Artist List</h1>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="mt-5 p-5">
                            <h2 className="text-3xl text-orange-500 cursor-pointer">{item.name}</h2>
                            <p className="text-xl select-none">{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const Loading = () => {
    return (
        <div>loading data....</div>
    )
}