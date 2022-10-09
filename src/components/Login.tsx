import { ChangeEvent, useState, useEffect, FormEvent } from "react";
import firebase, {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  return (
    <>
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <h1>ログイン</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={loginEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLoginEmail(e.target.value)
                }
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={loginPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLoginPassword(e.target.value)
                }
              />
            </div>
            <div>
              <button>ログイン</button>
              <p>
                新規登録は<Link to={`/register/`}>こちら</Link>
              </p>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
