import { useState } from "react"

export default function Form(props) {
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('type');
    const handleClick = async (e) => {
        setStatus('submitting');
        setTimeout(() => {
            if (answer === 'nova') {
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500)
    }

    const handleInput = (e) => {
        if (status === 'error') setStatus('type')
        setAnswer(e.target.value);
    }
    return (
        status === 'success' ? 
        <div style={{
            color: 'green',
            display: 'inline-block'
        }}>You are Success !!</div> :
        <form>
            <textarea name="answer" id="answer" disabled={status === 'submitting'} onInput={handleInput}></textarea>
            <button id="submit" onClick={handleClick} disabled={status === 'submitting' || answer === ''} style={{display: 'block'}}>点击提交</button>
            {
                status === 'error' && <div style={{color: 'red'}}>Ohhhh, You are Error</div>
            }
            <div>SLOT: {props.children}</div>
        </form>
    )
}