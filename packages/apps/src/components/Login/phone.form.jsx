import React from "react";
import { Input } from "../Input";
export default function PhoneForm() {
    const phoneRef = React.useRef(null);
    const handleConfirmCode = () => {
        console.log('获取验证码', phoneRef.current.value)
    }
    return (
        <>
            <Input placeholder="手机号" addonBefore={<span style={{cursor: 'pointer'}}>+86</span>} style={{height: '40px'}} ref={phoneRef}/>
            <Input placeholder="验证码" addonAfter={<span className="get-ott" style={{cursor: 'pointer'}} onClick={() => handleConfirmCode()}>获取验证码</span>} style={{height: '40px', marginTop: '10px'}}/>
        </>
    )
}