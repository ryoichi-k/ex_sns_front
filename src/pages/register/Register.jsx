import React, { useRef, useContext } from 'react'
import "./Register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";


export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();
    //以前はuseHistoryだったがバージョン６から変わった。
    const navigate = useNavigate();
    //ボタンを押した時
    const handleSubmit = async (e) => {
        e.preventDefault();//ログイン押してもリロードされない

        //パスワードと確認用の照合
        if (password.current.value !== passwordConfirm.current.value) {
            passwordConfirm.current.setCustomValidity("パスワードが違います");
        } else {
            try {
                //どんなユーザーを登録するのか（inputのformに打ち込んだ文字列）
                const user = {
                  username: username.current.value,
                  email: email.current.value,
                  password: password.current.value,
                };
                //registerAPIを叩く
                await axios.post("/auth/register", user);
                //ログイン画面にリダイレクト
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }

    };

  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">社内SNS</h3>
        <span className="loginDesc">みんなでアウトプット！もう寂しくない！</span>
      </div>
      <div className="loginRight">
        <form className="loginBox"  onSubmit={(e) => handleSubmit(e)}>
          <p className="loginMsg">新規登録はこちら</p>
          <input
            type="email"
            className="loginInput"
            placeholder="Eメール"
            required
            ref={email}
          />
          <input
            type="text"
            className="loginInput"
            placeholder="ユーザー名"
            required
            ref={username}
          />
          <input
            type="password"
            className="loginInput"
            required
            minLength="6"
            placeholder="パスワード"
            ref={password}
          />
          <input
            type="password"
            className="loginInput"
            required
            minLength="6"
            placeholder="確認用パスワード"
            ref={passwordConfirm}
          />
          <button className="loginButton" type="submit">サインアップ</button>
          <button className="loginRegisterButton">ログイン</button>
        </form>
      </div>
    </div>
  </div>
  )
}
