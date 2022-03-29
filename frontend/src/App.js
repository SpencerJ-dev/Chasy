import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import NewTask from './components/NewTask';
import AllTasks from './components/AllTasks';

function App() {
  return (
    <Router>
    <div className = "container">
      <h1>Chasy</h1>
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "/newtask" element={<NewTask/>}></Route>
        <Route path = "/login" element={<Login/>}></Route>
        <Route path = "alltasks" element={<AllTasks/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
