import Login from "./login";
import './login.css';
import './dashboard.css';
import Dashboard from "./dashboard";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes><Route exact path="/login" element={<Login/>}/>
     <Route exact path="/dashboard" element={<Dashboard />}/>
     </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
  