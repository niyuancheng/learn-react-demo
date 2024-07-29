import { observable, runInAction } from "mobx";

export abstract class BaseStore<T = void> {
    /**
     * @getter
     * @desc This MUST be a Getter.
     * @desc 设置默认状态。Store 初始化完成后，可读取 `Store.state` 来获取状态
     */
    protected get defaultState(): T {
        return null;
    }
    /**
     * @readonly
     * @desc Only observe shallow(one-level-deep).
     * @desc 基础状态。默认在触发 dispose 事件时，会被重置为 `Store.defaultState`
     */
    state: T;
    constructor() {
        this.state = observable.object(this.defaultState, null, {
            deep: false
        });
    }

    setState(newState: Partial<T>) {
        runInAction(() => {
            for (let key in newState) {
                if (this.state[key] && newState[key] !== this.state[key]) {
                   this.state[key] = newState[key];
                }
            }
        })
    }
}