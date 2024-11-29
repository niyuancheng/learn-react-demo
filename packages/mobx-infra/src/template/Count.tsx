import { createEffect, createMemo, createSignal } from "solid-js"
import { randomBackgroundColor } from "../utils";

function Count(props: {num?: number}) {
    let firstNameInput, lastNameInput: HTMLInputElement;
    const [getCount, setCount] = createSignal<number>(0);
    const [getNameObj, setNameObj] = createSignal<{
        firstName: string,
        lastName: string
    }>({
        firstName: 'nova',
        lastName: 'ni'
    })
    const name = createMemo(() => getNameObj().firstName + '-' + getNameObj().lastName);

    console.log('count update')
    createEffect((prev) => {
        console.log(prev, getCount())
        // alert(111)
        return getCount();
    }, 0)

    setCount(c => c + 2);
    setCount(c => c + 1);
    setTimeout(() => {
        setCount(c => c + 1);
    
        console.log('111')
    }, 1000)
    const handleClick = (state: 'increment' | 'decrement') => {
        switch (state) {
            case 'increment':
                setCount(c => c + 1);
                break;
            case 'decrement':
                setCount(c => c - 1);
                break;
            default:
                break;
        }
        console.log('click')
    }
    const handleNameInput = () => {
        setNameObj({
            ...getNameObj(),
            firstName: firstNameInput.value,
            lastName: lastNameInput.value
        })
    }
    return (
        <div class="solidjs-count-container">
            <button onClick={() => handleClick('increment')}>+1</button>
            <span>{getCount()}</span>
            <button onClick={() => handleClick('decrement')}>-1</button>
            <div>
                <div style={{"background-color": randomBackgroundColor()}}>Your first name is: {getNameObj().firstName}</div>
                <div style={{"background-color": randomBackgroundColor()}}>Your last name is: {getNameObj().lastName}</div>
                <div style={{"background-color": randomBackgroundColor()}}>Your total name is: {name()}</div>
                <input type="text" placeholder="change firstname" onInput={handleNameInput} ref={firstNameInput} value={getNameObj().firstName}/>
                <input type="text" placeholder="change lastname" onInput={handleNameInput} ref={lastNameInput} value={getNameObj().lastName}/>
            </div>
        </div>
    )
}

export default Count;