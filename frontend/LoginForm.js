import React, {useState} from "react"
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
//route = switch in react 7
import { useNavigate } from "react-router-dom";
//navigate = history in react 7
import RegisterForm from "./RegisterForm";

function LoginForm({Login,error}) {
    let nav = useNavigate();
//local detailes   
    const [details, setDetails]=useState({name: "",email: "",password: ""});
//handles submitions
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Chasy Login</h2>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="Login" />
                    <br></br>
                    <><Router>
                    <Routes>
                    <Route exact pact="./RegisterForm" component={RegisterForm} />
                    </Routes>
                    </Router></>
                    <button onClick={() => {
                        nav("./RegisterForm");
                    } }
                    >Register</button>
                </div>
            </form>
        );
    }
 export default LoginForm;