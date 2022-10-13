import React from "react";
import Time from "./Time";
import DeleteIcon from "@mui/icons-material/Delete";

function Date() {
  return (
    <div>
      <div>
        <input type="date"></input>
        {/* 日付ごとの削除ボタン */}
        <DeleteIcon />
        <Time />
      </div>
      <div>
        {/* 1つのスケジュールBOXの追加ボタン */}
        <button>＋日程追加</button>
      </div>
    </div>
  );
}

export default Date;
