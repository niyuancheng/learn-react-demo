import * as React from "react";
import "./index.less";

interface InputProps {
    placeholder?: string;
    addonBefore?: React.JSX.Element,
    addonAfter?:  React.JSX.Element,
    autoSize?: boolean
}

export const Input: React.FC<InputProps> = (props) => {
    return (
        <div className="antd-input-container">
            <div className="antd-input-addonBefore-container">{props.addonBefore}</div>
            <input type="text" placeholder={props.placeholder || ''} className="antd-input"/>
            <div className="antd-input-addonAfter-container">{props.addonAfter}</div>
        </div>
    )
}