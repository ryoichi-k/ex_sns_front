import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//初期値のstateを定義する。
//グローバルコンテキスト　⇨ 各種状態をどのコンポーネントでも使えるように

//初期値のユーザー状態
const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

//状態をグローバルに管理
//初期値のユーザー状態をどこからでもアクセスできるようにする
export const AuthContext = createContext(initialState);

//認証状態
export const AuthContextProvider = () => {
    //useReducerは第１引数にreducer、第二引数に初期値をとる。dispatchはアクションの通知部分
    const [state, dispatch] = useReducer(AuthReducer, initialState);
}