//Reducerを作成(AuthActions.jsで設定したアクションに応じてreturnするオブジェクトを決めておく)

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        //ログイン成功状態ではuser情報を取ってくる
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        //エラーの時はuser情報とってこない
        case "LOGIN_ERROR":
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

//exportしておかないとAuthContextでimportできないよ〜
export default AuthReducer;