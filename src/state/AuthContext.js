import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

//初期値のstateを定義する。
//グローバルコンテキスト　⇨ 各種状態をどのコンポーネントでも使えるように

//初期値のユーザー状態
const initialState = {
    //ローカルストレージにユーザー情報があれば取得、なければnull
    user: JSON.parse(localStorage.getItem("user")) || null,
    // user: {
    //     _id : "62f98fb2bf45a1203e8d3be6",
    //     username : "tanaka",
    //     email : "tanaka@gmail.com",
    //     password : "tanatana",
    //     profilePicture : "/person/1.jpeg",
    //     coverPicture : "",
    //     followers : [],
    //     followings : [],
    //     isAdmin : false,
    // },
    isFetching: false,
    error: false,
};

//状態をグローバルに管理
//初期値のユーザー状態をどこからでもアクセスできるようにする
export const AuthContext = createContext(initialState);

//認証状態
export const AuthContextProvider = ({ children }) => {
    //useReducerは第１引数にreducer、第二引数に初期値をとる。dispatchはアクションの通知部分。
    //stateにはユーザーが今ログインしているかどうかの状態が格納されている。
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //ローカルストレージにユーザー状態を保存
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user]);




    //この中身をみんなで共有したい。すべたのコンポーネントでvalueのオブジェクトが使える
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    );
};