import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  // emailValue is an alias
  const {
    value: emailValue, 
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue, 
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  // const emailIsInvalid = 
  //   didEdit.email && 
  //   !isEmail(enteredValues.email) &&
  //   !isNotEmpty(enteredValues.email);
  // console.log(emailIsInvalid);
  // const passwordIsInvalid = 
  //   didEdit.password && 
  //   !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: '',
  // });
  // const [didEdit, setDidEdit] = useState(
  //   {
  //     email: false,
  //     password: false,
  //   }
  // );

  // const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes('@');

  

  // function handleInputChange(identifier, value) {
  //   setEnteredValues(prevValues => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }));
  //   setDidEdit((prevEdit) => ({
  //    ...prevEdit,
  //     [identifier]: false,
  //   }))
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }))
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Invalid email address'}
        />

        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && 'Password must be at least 6 characters long'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
