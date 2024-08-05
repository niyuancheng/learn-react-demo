import React, { useState, useMemo } from "react";
import mihoyo from "../../assets/mihoyo-logo.png";
import { useDispatch } from "react-redux";
import { setIsShowLogin } from "../../store/login.store";
import classNames from "classnames";
import "./index.css";
import PasswordForm from "./password.form";
import PhoneForm from "./phone.form";
const types = [
    {
        content: '短信登录',
        isActive: true,
        className: classNames('login-type', 'phone-login'),
        type: 'phone'
    },
    {
        content: '密码登录',
        isActive: false,
        className: classNames('login-type', 'password-login'),
        type: 'password'
    }
]

export default function Login() {
    const dispatch = useDispatch();
    const [ loginTypes, setLoginTypes ] = useState(types);
    //! 使用useMemo在函数式组件中创建计算属性！！！
    const type = useMemo(() => {
        return loginTypes.filter(item => item.isActive)[0].type;
    }, [loginTypes]);

    const handleCloseBtnClick = (e) => {
        dispatch(setIsShowLogin(false));
    }
    const handleLoginTypeClick = (id) => {
        setLoginTypes(loginTypes.map((item, index) => {
            if (id === index) {
                return {
                    ...item,
                    isActive: true
                }
            } else {
                return {
                    ...item,
                    isActive: false
                }
            }
        }))
    }
    return (
        <div className="nova-login-container">
            <div className="nova-login-box">
                <span className="nova-login-box-close" onClick={handleCloseBtnClick}></span>
                <div className="nova-login-box-body">
                    <div className="nova-login-box-body-title">
                        <img src={mihoyo} alt="mihoyo-logo" />
                    </div>
                    <div className="nova-login-box-body-type">
                        {
                            loginTypes.map((item, index) => <span className={`${item.className} ${item.isActive && 'active'}`} onClick={() => handleLoginTypeClick(index)}>{item.content}</span>)
                        } 
                    </div>
                    <form className="nova-login-box-body-form" style={{marginTop: '20px'}}>
                        {
                            type === 'password' ? <PasswordForm /> : <PhoneForm />
                        }
                        <button type="submit">登录</button>
                    </form>
                </div>
            </div>
        </div>
    )
}