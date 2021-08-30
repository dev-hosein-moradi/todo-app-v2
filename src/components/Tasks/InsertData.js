import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import "../Tasks/InsertData.css";

const InsertData = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    category: "",
    month: "",
    day: "",
    hours: "",
    minute: "",
  });
  const [toggleCard, setToggleCard] = useState(false);
  const [errorMessage1, setErrorMessage1] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => {
      return {
        ...prevTodo,
        [name]: value,
      };
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    /*  */
    if (todo.hours.length > 2 || todo.minute.length > 2) {
      props.error2(true);
      return;
    }
    /*  */
    if (!todo.title || !todo.category || !todo.hours || !todo.minute) {
      setErrorMessage1(true);
      return;
    } else if (todo.category === "Job") {
      props.onTodosJob(todo);
      setErrorMessage1(false);
    } else if (todo.category === "Daily") {
      props.onTodosDaily(todo);
      setErrorMessage1(false);
    } else if (todo.category === "Future") {
      props.onTodosFuture(todo);
      setErrorMessage1(false);
    } else if (todo.category === "School") {
      props.onTodosSchool(todo);
      setErrorMessage1(false);
    }
    /*  */

    /*  */
    setTodo({
      title: "",
      category: "",
      month: "",
      day: "",
      hours: "",
      minute: "",
    });
  };
  /*  */
  const handleToggle = () => {
    setToggleCard(!toggleCard);
  };
  return (
    <div className={`InsertData ${toggleCard ? "animationInsertData" : ""}`}>
      <div className={`toggle-btn`}>
        <button onClick={handleToggle}>
          {toggleCard ? "Close" : "Add Task"}
        </button>
      </div>
      {errorMessage1 && (
        <div className={`error-messaeg ${toggleCard ? null : "closeFeatures"}`}>
          {" "}
          Please Fill All The Fields !{" "}
        </div>
      )}
      <div className={`textFeild ${toggleCard ? null : "closeFeatures"}`}>
        <TextField
          style={{ margin: "1px 5px 5px 5px", width: "95%" }}
          id="textFeild"
          label="Write Your Task"
          variant="outlined"
          name="title"
          size="small"
          autoComplete="off"
          value={todo.title}
          onChange={handleChange}
        ></TextField>
        <TextField
          style={{ margin: "5px", width: "70%" }}
          select
          id="category"
          label="Choose Category"
          variant="outlined"
          name="category"
          size="small"
          value={todo.category}
          onChange={handleChange}
        >
          <MenuItem className="menu-item" value="Job">
            Job
          </MenuItem>
          <MenuItem className="menu-item" value="Daily">
            Daily
          </MenuItem>
          <MenuItem className="menu-item" value="Future">
            Future
          </MenuItem>
          <MenuItem className="menu-item" value="School">
            School
          </MenuItem>
        </TextField>
      </div>
      <div className={`time-date ${toggleCard ? null : "closeFeatures"}`}>
        {/* <div className="date">
          <input
            name="month"
            placeholder="m"
            autoComplete="off"
            min="1"
            max="12"
            type="number"
            value={todo.month}
            onChange={handleChange}
          ></input>

          
          <strong style={{ fontSize: "19pt", padding: "4px 1px" }}>/</strong>
          
          <input
            name="day"
            placeholder="d"
            autoComplete="off"
            min="1"
            max="31"
            type="number"
            value={todo.day}
            onChange={handleChange}
          ></input>
        </div> */}

        <div className="time">
          <input
            name="hours"
            placeholder="h"
            autoComplete="off"
            min="0"
            max="23"
            type="number"
            value={todo.hours}
            onChange={handleChange}
          ></input>{" "}
          <strong style={{ fontSize: "15pt", padding: "4px 1px" }}>:</strong>{" "}
          <input
            name="minute"
            placeholder="m"
            autoComplete="off"
            min="0"
            max="60"
            type="number"
            value={todo.minute}
            onChange={handleChange}
          ></input>
        </div>
        {/*  */}
      </div>
      <div className={`add-task-btn ${toggleCard ? null : "closeFeatures"}`}>
        <Button
          id="add-button"
          style={{
            width: "30%",
            margin: "0 auto -10px auto",
            background: "#c3bef0",
          }}
          variant="contained"
          onClick={handleClick}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};
export default InsertData;
