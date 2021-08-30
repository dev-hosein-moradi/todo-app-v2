import { useState, useEffect } from "react";
import "../Tasks/Task.css";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import UndoIcon from "@material-ui/icons/Undo";

const Task = ({
  id,
  title,
  category,
  month,
  day,
  hours,
  minute,
  userCat,
  setJobTodos,
  jobTodos,
  handleDeleteClick,
}) => {
  const [catColor, setCatColor] = useState();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (category === "Job") {
      setCatColor("catJob");
    } else if (category === "Daily") {
      setCatColor("catDaily");
    } else if (category === "Future") {
      setCatColor("catFuture");
    } else if (category === "School") {
      setCatColor("catSchool");
    } else if (category === "Home") {
      setCatColor("catHome");
    }
  }, [category]);

  const handleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`task ${completed && "completeTask"}`}>
      <div className={`task-title ${catColor}`}>
        <p spellCheck="false">{title}</p>
      </div>
      <div className={`task-features `}>
        <p>
          {hours}{" "}
          <strong style={{ fontSize: "15pt", padding: "4px 1px" }}>:</strong>{" "}
          {minute}
        </p>
        <button onClick={handleComplete}>
          {completed ? (
            <UndoIcon className="undo-icon" />
          ) : (
            <DoneAllIcon className="done-icon" />
          )}
        </button>
        <button onClick={() => handleDeleteClick(id, category)}>
          <DeleteOutlineIcon className="delete-icon" />
        </button>
      </div>
    </div>
  );
};
export default Task;
