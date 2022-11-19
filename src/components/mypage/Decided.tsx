import React from "react";

type Props = {
  title: string;
};

function Decided() {
  return (
    <div>
      <div>
        <h2>大阪旅行</h2>
        <h3>2022年11月1日</h3>
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
        <p>各自切符を持ってくる</p>
      </div>
    </div>
  );
}

export default Decided;
