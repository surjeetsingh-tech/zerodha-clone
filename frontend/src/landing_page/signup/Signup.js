import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try{
    const res = await axios.post("http://localhost:3002/signup", {
      email,
      password
    });

    alert(res.data.msg);

    window.location.href = "/login";

     } catch (err) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="container-fluid bg-light mt-5 mb-5">
      <div className="row">
        <div className="col-4 d-flex flex-column justify-content-center
        align-items-center text-center left-panel" id="leftpanel">
         <h3 className="mb-2">Come Join us!</h3>
         <p className="px-4">We are so excited to have you here. If you<br/>
         haven't already,create an account to get<br/>
         access to exclusive offers, rewards, and<br/>
         discounts.
         </p>
         <button className="btn btn-light fs-5">Already have an account?<a href="/login"> Login.</a></button>
        </div>
       <div className="col-4 d-flex flex-column justify-content-center" id="rightpanel">
        <h1 className="mb-5 mt-5 text-center">Signup</h1>
      <input className="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" /><br/><br/>
      <input className="password" onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password" /><br/><br/>
      <button className="btn btn-primary mb-5 fs-5" onClick={handleSignup}>Signup</button><br/>
       </div>
      </div>
    </div>
  );
};