import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  return (
    <>
      <h1>Create Account</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFormSubmitted(true);
          if (props.password !== props.confirmPassword) {
            setPasswordsMatch(false);
          } else {
            setPasswordsMatch(true);
            props.onSubmit(true);
          }
        }}
      >
        <span>Name</span>
        <input
          type="text"
          placeholder="Mickael Jackson"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
        <span>Email</span>
        <input
          type="email"
          placeholder="mickaeljackson@gmail.com"
          value={props.mail}
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <span>Password</span>
        <div>
          <input
            className={!passwordsMatch && formSubmitted ? "error" : ""}
            type="password"
            placeholder="123456"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
        </div>
        <span>Confirm your password</span>
        <div>
          <input
            className={formSubmitted && !passwordsMatch ? "error" : ""}
            type="password"
            placeholder="123456"
            value={props.confirmPassword}
            onChange={(e) => props.setConfirmPassword(e.target.value)}
          />
        </div>
        <span
          className={formSubmitted && !passwordsMatch ? "errormssg" : "hidden"}
        >
          Les mots de passe ne sont pas identiques
        </span>
        <input className="submitform" type="submit" value="Register" />
      </form>
    </>
  );
};
export default Form;
