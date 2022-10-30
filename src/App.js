import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import FriendDetails from "./components/FriendDetails/FriendDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/friend/:friendId" element={<FriendDetails />} />
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
