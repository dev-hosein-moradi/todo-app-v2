import { useEffect, useState } from "react";
import "../Tasks/Tasks.css";
import ErrorMessage from "./ErrorMessage";
import InsertData from "./InsertData";
import Task from "./Task";

const Tasks = ({ category, setCategory, toggleMenu }) => {
  /* store  todos */
  const [jobTodos, setJobTodos] = useState([]);
  const [dailyTodos, setDailyTodos] = useState([]);
  const [futureTodos, setFutureTodos] = useState([]);
  const [schoolTodos, setSchoolTodos] = useState([]);
  /*  */
  const [errorMessage2, setErrorMessage2] = useState(false);
  /*  */
  const [userCat, setUserCat] = useState();
  /*  */

  useEffect(() => {
    setUserCat(category);
  }, [category]);

  const storeTodoJob = (Job) => {
    setJobTodos((prevJob) => {
      return [...prevJob, Job];
    });
  };
  const storeTodoDaily = (Daily) => {
    setDailyTodos((prevDaily) => {
      return [...prevDaily, Daily];
    });
  };
  const storeTodoFuture = (Future) => {
    setFutureTodos((prevFuture) => {
      return [...prevFuture, Future];
    });
  };
  const storeTodoSchool = (School) => {
    setSchoolTodos((prevSchool) => {
      return [...prevSchool, School];
    });
  };
  /* delete */
  const handleDeleteClick = (id, category) => {
    if (category === "Job") {
      setJobTodos(() => {
        return jobTodos.filter((prevNote, index) => {
          return index !== id;
        });
      });
    } else if (category === "Daily") {
      setDailyTodos(() => {
        return dailyTodos.filter((prevNote, index) => {
          return index !== id;
        });
      });
    } else if (category === "Future") {
      setFutureTodos(() => {
        return futureTodos.filter((prevNote, index) => {
          return index !== id;
        });
      });
    } else if (category === "School") {
      setSchoolTodos(() => {
        return schoolTodos.filter((prevNote, index) => {
          return index !== id;
        });
      });
    }
  };
  return (
    <div
      className={`Tasks ${toggleMenu ? "lowVisibilit" : "normalVisibility"}`}
    >
      <InsertData
        onTodosJob={storeTodoJob}
        onTodosDaily={storeTodoDaily}
        onTodosFuture={storeTodoFuture}
        onTodosSchool={storeTodoSchool}
        error2={setErrorMessage2}
      />
      {errorMessage2 ? (
        <ErrorMessage
          errorMessage2={errorMessage2}
          setErrorMessage2={setErrorMessage2}
        />
      ) : null}

      {jobTodos && userCat === "Job"
        ? jobTodos.map((task, index) => {
            return (
              <Task
                key={index}
                id={index}
                category={task.category}
                day={task.day}
                month={task.month}
                title={task.title}
                hours={task.hours}
                minute={task.minute}
                completed={task.completed}
                userCat={userCat}
                setJobTodos={setJobTodos}
                jobTodos={jobTodos}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })
        : null}

      {dailyTodos && userCat === "Daily"
        ? dailyTodos.map((task, index) => {
            return (
              <Task
                key={index}
                id={index}
                category={task.category}
                day={task.day}
                month={task.month}
                title={task.title}
                hours={task.hours}
                minute={task.minute}
                completed={task.completed}
                userCat={userCat}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })
        : null}
      {futureTodos && userCat === "Future"
        ? futureTodos.map((task, index) => {
            return (
              <Task
                key={index}
                id={index}
                category={task.category}
                day={task.day}
                month={task.month}
                title={task.title}
                hours={task.hours}
                minute={task.minute}
                completed={task.completed}
                userCat={userCat}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })
        : null}
      {schoolTodos && userCat === "School"
        ? schoolTodos.map((task, index) => {
            return (
              <Task
                key={index}
                id={index}
                category={task.category}
                day={task.day}
                month={task.month}
                title={task.title}
                hours={task.hours}
                minute={task.minute}
                completed={task.completed}
                userCat={userCat}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })
        : null}
    </div>
  );
};
export default Tasks;
