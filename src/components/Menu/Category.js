import { Button } from "@material-ui/core";
import "../Menu/Category.css";

const Category = (props) => {
  return (
    <div className="Category">
      <Button
        id="category-btn-job"
        variant="contained"
        name="Job"
        onClick={props.onJob}
      >
        <span
          style={{
            background: "#fce38a",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            position: "relative",
            right: "41px",
          }}
        ></span>
        JOB
      </Button>
      <Button
        id="category-btn-daily"
        variant="contained"
        name="DAILY"
        onClick={props.onDaily}
      >
        <span
          style={{
            background: "#f38181",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            position: "relative",
            right: "33px",
          }}
        ></span>
        DAILY
      </Button>
      <Button
        id="category-btn-future"
        variant="contained"
        name="FUTURE"
        onClick={props.onFuture}
      >
        <span
          style={{
            background: "#7fc8a9",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            position: "relative",
            right: "27px",
          }}
        ></span>
        FUTURE
      </Button>
      <Button
        id="category-btn-school"
        variant="contained"
        name="SCHOOL"
        onClick={props.onSchool}
      >
        <span
          style={{
            background: "#F6A9A9",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            position: "relative",
            right: "25px",
          }}
        ></span>
        SCHOOL
      </Button>
    </div>
  );
};
export default Category;
