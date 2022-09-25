import { ChangeEvent, useState } from "react"

const Login = () => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div>
      <h1>ログイン</h1>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={loginEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={loginPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLoginPassword(e.target.value)}
          />
        </div>
        <div>
          <button>ログイン</button>
        </div>
    </div>
  );
};

export default Login;