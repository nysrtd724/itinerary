import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Time() {
  return (
    <div>
      <div>
        <input type="time"></input>
        <DeleteIcon />
        <input placeholder="タイトル（例：東京駅に集合）" type="text"></input>
        <input
          placeholder="内容（例：各自切符を持ってくる）"
          type="text"
        ></input>
      </div>
      <div>
        <button>+スケジュール追加</button>
      </div>
    </div>
  );
}

export default Time;
