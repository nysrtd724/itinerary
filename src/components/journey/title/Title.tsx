import React from "react";
import "./Title.css";

function Title() {
  return (
    <div>
      <input placeholder="タイトル（例：大阪旅行）" type="text"></input>
      <div className="title-date">
        <input className="title-start" type="date"></input>
        <h3>〜</h3>
        <input className="title-end" type="date"></input>
      </div>
    </div>
  );
}

export default Title;
