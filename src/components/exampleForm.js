import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = (props) => {
  return (
    props.visible
      ? <p className="FieldError">Password should have at least 8 characters</p>
      : <></>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const [passErrVis, setPassErrVis] = useState(false);

  function firstNameChange(e) {
    setFirstName(e.target.value);
  }

  function lastNameChange(e) {
    setLastName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function passwordChange(e) {
    // console.log(password);

    let newPass = {value: e.target.value, isTouched: true}
    setPassword(newPass);

    let passEVis = false;
    if(newPass.isTouched && newPass.value.length < 8) {
      passEVis = true;
    }
    setPassErrVis(passEVis);

  }

  function roleChange(e) {
    setRole(e.target.value);
  }

  const getIsFormValid = () => {

    let firstNameValid = firstName.length > 0;
    let lastNameValid = lastName.length > 0;
    let emailValid = validateEmail(email);
    let passwordValid = password.value.length >= 8;
    let roleValid = ["individual", "business"].includes(role);

    let formValid = firstNameValid
                    && lastNameValid
                    && emailValid
                    && passwordValid
                    && roleValid;

    return formValid
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    let newPass = {value: "", isTouched: false}
    setPassword(newPass);
    setRole("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={firstNameChange}/>
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={lastNameChange}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={emailChange}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" placeholder="Password" value={password.value} onChange={passwordChange}/>
            <PasswordErrorMessage visible={passErrVis}/>
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={roleChange}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
