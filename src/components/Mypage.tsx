import React, { useEffect, useState } from "react";
import firebase, { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Navigate, Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { isTemplateMiddle } from "typescript";

function Mypage() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [itinerary, setItinerary] = useState<any[]>([]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    const itineraryDate = collection(db, "itinerary");
    getDocs(itineraryDate).then((querySnapshot) => {
      setItinerary(querySnapshot.docs);
    });
    console.log("a");
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  };

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <>
              <h1>しおり一覧</h1>
              <p>
                {itinerary.map((item) => (
                  <Link to={`/decided/${item.id}`}>{item.data().title}</Link>
                ))}
              </p>
              <p>
                <Link to={`/journey/`}>
                  <AddIcon />
                </Link>
              </p>
              <button onClick={logout}>ログアウト</button>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Mypage;
