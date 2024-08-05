import React from "react";
import { Input } from "../Input";
export default function PhoneForm() {
    return (
        <>
            <Input placeholder="手机号" addonBefore={<span style={{cursor: 'pointer'}}>+86</span>} style={{height: '40px'}}/>
            <Input placeholder="验证码" addonAfter={<span className="get-ott" style={{cursor: 'pointer'}}>获取验证码</span>} style={{height: '40px', marginTop: '10px'}}/>
        </>
    )
}