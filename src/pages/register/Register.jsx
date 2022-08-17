import React from 'react'
import "./Register.css"

export default function Register() {
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">社内SNS</h3>
        <span className="loginDesc">みんなでアウトプット！もう寂しくない！</span>
      </div>
      <div className="loginRight">
        <form className="loginBox">
          <p className="loginMsg">新規登録はこちら</p>
          <input
            type="email"
            className="loginInput"
            placeholder="Eメール"
            required
            // ref={email}
          />
          <input
            type="text"
            className="loginInput"
            placeholder="ユーザー名"
            required
            // ref={email}
          />
          <input
            type="password"
            className="loginInput"
            required
            minLength="6"
            placeholder="パスワード"
            // ref={password}
          />
          <input
            type="password"
            className="loginInput"
            required
            minLength="6"
            placeholder="確認用パスワード"
            // ref={password}
          />
          <button className="loginButton">サインアップ</button>
          <button className="loginRegisterButton">ログイン</button>
        </form>
      </div>
    </div>
  </div>
  )
}
