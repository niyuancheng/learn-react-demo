"use server"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "./components/ui/button"
import { Slider } from "./components/ui/slider";
import { buttonClass } from "./cva/myButtons";
import { Switch } from "./components/ui/switch";
export const Home = () => {
    const button = useRef<HTMLButtonElement>(null);
    const [checked, setChecked] = useState(window.localStorage.getItem('switch') === 'true'? true : false);
    const handleSwitchChange = () => {
        window.localStorage.setItem('switch', !checked? 'true' : 'false');
        setChecked(val => !val);
    }
    useEffect(() => {
        const cb = () => {
            console.log('乒乒乓乓')
        }
        button.current.addEventListener('click', cb)
        button.current.click();

        return () => {
            button.current.removeEventListener('click', cb)
        }
    }, [])

    const a = buttonClass({
        intent: "primary",
        size: "medium"
    })

    return (
        <div w="30" h="30">
            <Button type="link" size="lg" onClick={() => console.log('click it!!!')} ref={button}>我是猪</Button>
            <Slider defaultValue={[33]} max={10} step={5} onValueChange={(val) => console.log('change', ...val)} className="w-1/3 h-10"/>
            <Switch onClick={handleSwitchChange} checked={checked} />
        </div>
    )
}