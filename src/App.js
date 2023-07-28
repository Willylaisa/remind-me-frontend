import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/logout" element={<Welcome />}/>
        <Route path="/tasks/:id" element={<Tasks />}/>
      </Routes>
    </div>
  )
}

export default App;
