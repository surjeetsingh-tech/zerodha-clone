import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://zerodha-clone-4-oxqz.onrender.com/login", {
        email,
        password
      });

      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem("token", res.data.token);

      alert("Login success");

    window.location.href = "https://zerodha-clone-f9jt.vercel.app";
    console.log("TOKEN FROM BACKEND:", res.data.token);

    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data);

      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="container rounded-4 mt-4 mb-5 w-50 bg-primary-subtle shadow-lg">
      <div className="row">
        <div className="col text-center border-0 justify-content-center align-items-center" style={{border:"2px solid black"}}>
          <h2 className="mt-5 mb-5 fw-bold">Login</h2>
      <input className="mb-4 mt-5 fs-4 shadow-lg bg-light-subtle rounded-3 border-0 w-50 p-3" style={{height:"50px"}}
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>
      <input className="mb-4 mt-5 fs-4 shadow-lg bg-light-subtle  bg-primary rounded-3 border-0 w-50 p-3" style={{height:"50px"}}
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/><br /><br />
      <button className="btn mb-5 mt-5 fs-4 text-white bg-primary w-50" style={{height:"50px"}} onClick={handleLogin}>Login</button>
      </div>
    </div>
   </div> 
  );
}
