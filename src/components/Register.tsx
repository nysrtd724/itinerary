import { ChangeEvent, useState } from "react"

const Register = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <div>
      <h1>新規登録</h1>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={registerEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={registerPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterPassword(e.target.value)}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
    </div>
  );
};

export default Register;