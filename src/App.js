import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import YoutubeVideo from "./components/YoutubeVideo";
import Home from "./pages/Home";
import Youtube from "./pages/Youtube";

function App() {
  return (
    <div className="App font-['Ubuntu',sans-serif]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/youtube' element={<Youtube />}></Route>
          <Route path='/youtube/:id' element={<YoutubeVideo />}></Route>
        </Routes>
      </BrowserRouter>
      {}
    </div>
  );
}

export default App;
