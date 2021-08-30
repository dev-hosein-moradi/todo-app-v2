import "./ErrorMessage.css";

const ErrorMessage = ({ errorMessage2, setErrorMessage2 }) => {
  return (
    <div className={`errorMessage`}>
      <div className="errorBtn">
        <button onClick={() => setErrorMessage2(!errorMessage2)}>
          <img
            className="returnBtn"
            src="https://img.icons8.com/ios-glyphs/25/000000/multiply.png"
            alt="return"
          />
        </button>
      </div>
      <p>
        invalid number in date or time field <br />
        <strong>Try again !</strong>
      </p>
    </div>
  );
};

export default ErrorMessage;
