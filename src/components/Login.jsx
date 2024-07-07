const name = 'Nova';
const target = 'https://www.bilibili.com';
function Login({isLogin}) {
    return isLogin ? <div>你好，{name}</div> : <strong>请点击<a href={target} target="__blank">此处</a>进行登录</strong>
}

export default Login;