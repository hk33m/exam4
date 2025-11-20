
import { Routes,Route } from "react-router-dom";
import Question from "./question";
import Home from "./home";

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/Question" element={<Question></Question>} ></Route>
      </Routes>
    </div>
  )
 
}

export default App;
