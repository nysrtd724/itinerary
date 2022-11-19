import React, { useState } from "react";
import Time from "./Time";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Date.css";
import { IconButton, Button } from "@mui/material";

function Date() {
  const [count, setCount] = useState(1);

  const addDate = () => {
    setCount(count + 1);
  };

  const dates = () => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      items.push(
        <form>
          <div className="date-datebox">
            <input className="date-input" type="date"></input>
            {/* 日付ごとの削除ボタン */}
            <IconButton aria-label="delete">
              <DeleteIcon className="date-deleteIcon" />
            </IconButton>
          </div>
          <Time />
        </form>
      );
    }
    return items;
  };

  return (
    <div>
      <div>{dates()}</div>
      <div>
        {/* 1つのスケジュールBOXの追加ボタン */}
        <Button
          variant="contained"
          className="date-button"
          type="submit"
          onClick={addDate}
        >
          ＋日程追加
        </Button>
      </div>
    </div>
  );
}

export default Date;
