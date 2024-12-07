import React, { useEffect, useRef } from "react"
import { Button } from "./components/ui/button"
import { Slider } from "./components/ui/slider";
import { buttonClass } from "./cva/myButtons";
export const Home = () => {
    const button = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        console.log(button)

        const cb = () => {
            console.log('乒乒乓乓')
        }

        button.current.addEventListener('click', cb)
        button.current.click();

        return () => {
            button.current.removeEventListener('click', cb)
        }
    })

    const a = buttonClass({
        intent: "primary",
        size: "medium"
    })

    console.log(a)
    return (
        <div w="30" h="30" className="flex items-center justify-center">
            <Button type="link" onClick={() => console.log('click it!!!')} ref={button}>我是猪</Button>
            <Slider defaultValue={[33]} max={100} step={10} onChange={(val) => console.log('change', val)}/>
        </div>
    )
}