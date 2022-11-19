import React, { useState, FormEvent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Time.css";
import { IconButton, Button } from "@mui/material";

function Time() {
  const [count, setCount] = useState(1);

  const addSchedule = async (e: any) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const schedules = () => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      items.push(
        <form>
          <div className="time-timebox">
            <input className="time-input" type="time"></input>
            <IconButton aria-label="delete">
              <DeleteIcon className="time-deleteIcon" />
            </IconButton>
          </div>
          <div className="time-plan">
            <input
              placeholder="タイトル（例：東京駅に集合）"
              type="text"
            ></input>
            <input
              placeholder="内容（例：各自切符を持ってくる）"
              type="text"
            ></input>
          </div>
        </form>
      );
    }
    return items;
  };

  return (
    <div>
      <div>{schedules()}</div>
      <div>
        <Button
          variant="contained"
          className="time-button"
          type="submit"
          onClick={addSchedule}
        >
          +スケジュール追加
        </Button>
      </div>
    </div>
  );
}

export default Time;
