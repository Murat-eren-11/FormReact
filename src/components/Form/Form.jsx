import { useState } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Form = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <div className="password">
          <input
            className={!passwordsMatch && formSubmitted ? "error" : ""}
            type={showPassword ? "text" : "password"}
            placeholder="123456"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            className="icon"
            icon={showPassword ? "eye-slash" : "eye"}
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>
        <span>Confirm your password</span>
        <div className="password">
          <input
            className={formSubmitted && !passwordsMatch ? "error" : ""}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="123456"
            value={props.confirmPassword}
            onChange={(e) => props.setConfirmPassword(e.target.value)}
          />
          <FontAwesomeIcon
            className="icon"
            icon={showConfirmPassword ? "eye-slash" : "eye"}
            onClick={() => setShowConfirmPassword((prevState) => !prevState)}
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
