import { autorun, observable, reaction, runInAction } from "mobx";

const counterStore = observable.object({
    // observable 属性:
    count: 0,
    isLogin: false,
}, null, {
    deep: false
});

console.log(counterStore)

window.onload = () => {
    const app = document.querySelector('#app');
    const incrementContainer = app.querySelector('.increment') as HTMLElement;
    const decrementContainer = app.querySelector('.decrement') as HTMLElement;
    const login = document.querySelector('#login');
    const loginBtn = login.querySelector('.login-btn') as HTMLElement;
    const loginText = login.querySelector('.login-text') as HTMLElement;

    incrementContainer.addEventListener('click', () => {
        runInAction(() => {
            counterStore.count += 1;
        })
    })

    decrementContainer.addEventListener('click', () => {
        runInAction(() => {
            counterStore.count -= 1;
        })
    })

    loginBtn.addEventListener('click', () => {
        runInAction(() => {
            counterStore.isLogin = !counterStore.isLogin
        })
    })

    const countDisposer = reaction(
        () => counterStore.count,
        (count) => {
            app.querySelector('span').textContent = count + '';
        },
        {
            fireImmediately: true
        }
    )

    autorun(() => {
        const isLogin = counterStore.isLogin;
        if (isLogin) {
            loginText.textContent = '已登陆';
            loginBtn.textContent = '退出登陆'
        } else {
            loginText.textContent = '未登录';
            loginBtn.textContent = '点击登陆'
        }
    })
    
}