//ユーザー入力に応じたアクションの設定
export const LoginStart = (user) => ({
    //アクションの名前
    type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    //成功した状態を返すため
    payload: user,
});
export const LoginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error,
});