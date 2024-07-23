import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const name = 'Nova';
const target = 'https://www.bilibili.com';
function Login() {
    const isLogin = useSelector(state => state.login.isLogin);
    const dispatch = useDispatch();

    return isLogin ? 
        (
            <div>
                <span>你好，{name}</span>
                <button onClick={() => dispatch({type: 'logout'})}>退出登录</button>
            </div>
        ) 
        : 
            <strong>请点击<a onClick={() => dispatch({type: 'login'})} style={{cursor: 'pointer', textDecoration: 'underline'}}>此处</a>进行登录</strong>
}

export default Login;