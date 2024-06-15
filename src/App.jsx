import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./components/SingUp";
import SingIn from "./components/SingIn";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SingUp />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
