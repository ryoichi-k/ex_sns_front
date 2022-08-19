import axios from "axios";

export const loginCall = async (user, dispatch) => {
    //loginが始まったという通知
    dispatch({ type: "LOGIN_START" });
    try {
        //loginがうまくいくと、authのloginのAPIを叩く
        const res = await axios.post("auth/login", user);//第２引数のuserにはemailとpass情報が入る
        //成功した通知を出す
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_ERROR", payload: err });
    }
};