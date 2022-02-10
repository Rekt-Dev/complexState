import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: ""
  });

function handleChange(event){
  const newValue = event.target.value
  setFullName({
    
  })
console.log(`this is fullName ${fullName.fName}`)
console.log(`this is newValue ${newValue}`)
}

function handleSubmit(){
  console.log("submitted bro")
 event.preventDefault()
}

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.email}</p>
      <form>
        <input onChange={handleChange}
         name="fName"
         placeholder="First Name" 
         />
        <input onChange={handleChange}
        name="lName" 
        placeholder="Last Name"/>
        <input name="email" 
        placeholder="Email" 
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
