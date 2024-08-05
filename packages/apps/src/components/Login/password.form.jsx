import React from "react";
import { Input } from "../Input";

export default function PasswordForm() {
    return (
        <>
            <Input placeholder="手机号/邮箱" style={{ height: '40px' }} />
            <Input.Password placeholder="密码" style={{ height: '40px', marginTop: '10px' }} visible={false} iconRender={visible => visible ? <span style={{ cursor: 'pointer' }}>可见</span> : <span style={{ cursor: 'pointer' }}>不可见</span>} />
        </>
    )
}