import './App.css'
import {useState} from 'react'
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      required:true,
      pattern: "^[A-Za-z0-9]{3,16}$",
     
     
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required:true,
     
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true,
     

    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern:values.password,
      required:true,
   
    },
  ];
 
const handleSubmit = (e) =>{
e.preventDefault()
}
const handleFocus = (event) =>{
   event.target.setAttribute("focused","true")
   
}
const onChange = (event)=>{
  setValues(prev =>({...prev,[event.target.name]:event.target.value}))

}
  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
        <h2>Register</h2>
      {inputs.map(values=>{
         return (<div key={values.id}>
                  <label className='label'>{values.label}</label>
                  <input  name={values.name} pattern = {values.pattern} focused = "false" value = {values[inputs.name]} type={values.type} placeholder = {values.placeholder} required ={values.required}  onChange={onChange}  onBlur = {handleFocus}/>
                  <span>{values.errorMessage}</span>
               </div>)
        })}
        <button type='submit'>submit</button>
      </form>
      {/* focused= {`${values.focused}`.toString()} */}
    </div>
  );
}

export default App;
