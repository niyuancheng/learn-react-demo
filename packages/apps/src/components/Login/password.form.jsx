import React from "react";
import { Input } from "../Input";
import Visible from "../../assets/visible.svg";
import UnVisible from "../../assets/unvisible.svg";

export default function PasswordForm() {
    return (
        <>
            <Input placeholder="手机号/邮箱" style={{ height: '40px' }} />
            <Input.Password placeholder="密码" style={{ height: '40px', marginTop: '10px' }} visible={false} iconRender={visible => visible ? <span style={{ cursor: 'pointer', marginRight: '5px' }}><Visible /></span> : <span style={{ cursor: 'pointer', marginRight: '5px' }}><UnVisible /></span>} />
        </>
    )
}