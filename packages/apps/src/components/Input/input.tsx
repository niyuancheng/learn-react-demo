import * as React from "react";
import { Password } from "./password";

export interface InputProps {
    placeholder?: string;
    addonBefore?: React.JSX.Element,
    addonAfter?: React.JSX.Element,
    autoSize?: boolean;
    // height?: string | number;
    // width?: string | number;
    onFocus?: () => void;
    onBlur?: () => void;
    type?: 'password' | 'text';
    style?: React.CSSProperties;
}
interface InputType {
    (props: InputProps): React.ReactNode;
    Password?: typeof Password;
}

export const Input: InputType = (props) => {

    // const inputRef = React.useRef(null);

    const containerRef = React.useRef(null);
    const handleInputFocus = (e) => {
        containerRef.current.classList.add('active');
        props.onFocus?.();
    }
    const handleInputBlur = (e) => {
        containerRef.current.classList.remove('active');
        props.onBlur?.();
    }

    return (
        <div className="antd-input-container" style={props.style} ref={containerRef}>
            <div className="antd-input-addonBefore-container" style={{ display: props.addonBefore ? '' : 'none' }}>{props.addonBefore}</div>
            <input type={props.type || 'text'} placeholder={props.placeholder || ''} className="antd-input" onFocus={(e) => handleInputFocus(e)} onBlur={(e) => handleInputBlur(e)} />
            <div className="antd-input-addonAfter-container" style={{ display: props.addonAfter ? '' : 'none' }}>{props.addonAfter}</div>
            {props.children}
        </div>
    )
}