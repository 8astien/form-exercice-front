import React, {useState} from "react";
import './form.css'


function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:3000/user/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              name: name,
              email: email,
            },
          }),
        });

        let resJson = await res.json();
        if (res.status === 200) {
          setName("");
          setEmail("");
          setMessage("User created successfully ⭐");
        } else {
          setMessage("Some error occured ⭕");
        }
        return resJson;
      } catch (err) {
        console.log(err);
      }
      
    };
  
    return (
        <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <input type="submit" vlaue="Save User" />
  
        </form>
        <div className="message">{message ? <p>{message}</p> : null}</div>
        </>
    );
  }
  
  export default Form;