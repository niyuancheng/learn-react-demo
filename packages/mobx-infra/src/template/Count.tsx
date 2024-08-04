import { createSignal } from "solid-js"

function Count(props: {num?: number}) {
    const [getCount, setCount] = createSignal<number>(0);
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
    }
    return (
        <div class="solidjs-count-container">
            <button onClick={() => handleClick('increment')}>+1</button>
            <span>{getCount()}</span>
            <button onClick={() => handleClick('decrement')}>-1</button>
        </div>
    )
}

export default Count;