const StepTwo = (props) => {
  return (
    <>
      <h1>Results</h1>
      <div className="result">
        <div>
          <span>Name : {props.name}</span>
          <span>Email : {props.email}</span>
          <span>Password : {props.password}</span>
        </div>
        <input
          className="backbtn"
          type="submit"
          value="Edit your information"
          onClick={(e) => {
            e.preventDefault();
            props.onSubmit(false);
          }}
        />
      </div>
    </>
  );
};
export default StepTwo;
