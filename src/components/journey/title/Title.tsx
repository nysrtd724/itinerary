import React from "react";

function Title() {
  return (
    <div>
      <input placeholder="タイトル（例：大阪旅行）" type="text"></input>
      <input type="date"></input>
      <p>〜</p>
      <input type="date"></input>
    </div>
  );
}

export default Title;
