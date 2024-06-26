import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import StepTwo from "./components/StepTwo/StepTwo";
import Footer from "./components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container">
      {formSubmitted ? (
        <StepTwo
          name={name}
          email={email}
          password={password}
          onSubmit={setFormSubmitted}
        />
      ) : (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onSubmit={setFormSubmitted}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
