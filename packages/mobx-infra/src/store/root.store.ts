import { BaseStore } from "./base.store";
interface IRootState {
    name: string;
    age: number;
}
export default class RootStore extends BaseStore<IRootState> {
    protected get defaultState(): IRootState {
        return {
            name: null,
            age: null
        }
    }
}