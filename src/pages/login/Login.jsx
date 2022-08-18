import React, { useRef } from 'react'
import "./Login.css"

export default function Login() {
    //input要素を監視（ユーザーが打ち込んだemailを取得できる。情報はcurrent以下にある）
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();//ログイン押してもリロードされない
        console.log(email.current.value);
        console.log(password.current.value);
    };
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">社内SNS</h3>
        <span className="loginDesc">みんなでアウトプット！もう寂しくない！</span>
      </div>
      <div className="loginRight">
        <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
          <p className="loginMsg">ログインはこちら</p>
          <input
            type="email"
            className="loginInput"
            placeholder="Eメール"
            required
            ref={email}
          />
          <input
            type="password"
            className="loginInput"
            required
            minLength="6"
            placeholder="パスワード"
            ref={password}
          />
          <button className="loginButton">ログイン</button>
          <span className="loginForgot">パスワードを忘れた方へ</span>
          <button className="loginRegisterButton">アカウント作成</button>
        </form>
      </div>
    </div>
  </div>
  )
}
