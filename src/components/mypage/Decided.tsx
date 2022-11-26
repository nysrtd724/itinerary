import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

function Decided() {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const itineraryDate = doc(db, "itinerary", id);
      getDoc(itineraryDate).then((documentSnapshot) => {
        console.log(documentSnapshot.data());
      });
      //getDocs(itineraryDate).then((querySnapshot) => {
      //  setItinerary(querySnapshot.docs);
      //});
    }
  }, []);

  return (
    <div>
      <div>
        <h2>大阪旅行</h2>
        {/*<h3>2022年11月1日</h3>
        <span>〜</span>
        <h3>2022年11月2日</h3>
      </div>
      <div>
        <h2>スケジュール</h2>
      </div>
      <div>
        <h3>2022年11月1日</h3>
        <p>8:00</p>
        <h3>東京駅</h3>
        <p>各自切符を持ってくる</p>*/}
      </div>
    </div>
  );
}

export default Decided;
