import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./components/SingUp";
import SingIn from "./components/SingIn";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<SingUp />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
