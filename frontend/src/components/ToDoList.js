import axios from "axios";
import { useState } from "react";
import "./ToDoList.css";

function GoalSetting() {
  const [goalDate, setGoalDate] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("push-ups");
  const [repetitions, setRepetitions] = useState(10);

  function handleSetGoal() {
    if (goalDate && selectedExercise && repetitions > 0) {
      // ユーザーの目標を送信するためのAPI呼び出しを追加
      axios
        .post("http://localhost:8000/api/goals", {
          date: goalDate,
          exercise: selectedExercise,
          repetitions: repetitions,
        })
        .then(() => {
          // 成功時の処理を追加
          // たとえば、成功時にユーザーに通知を表示するなど
        });
    } else {
      console.error("目標の設定に不足する情報があります");
    }
  }

  return (
    <div className="goalSetting">
      <h2>目標設定</h2>
      <div>
        <label>日にちを選ぶ: </label>
        <input
          type="date"
          value={goalDate}
          onChange={(e) => setGoalDate(e.target.value)}
        />
      </div>
      <div>
        <label>エクササイズを選ぶ: </label>
        <select
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
        >
          <option value="push-ups">腕立て伏せ</option>
          <option value="sit-ups">腹筋</option>
          <option value="squats">スクワット</option>
        </select>
      </div>
      <div>
        <label>回数を選ぶ: </label>
        <input
          type="number"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
        />
      </div>
      <button onClick={handleSetGoal} className="button">
        OK
      </button>
    </div>
  );
}

export default GoalSetting;
