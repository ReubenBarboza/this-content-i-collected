import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import YoutubeVideo from "./components/YoutubeVideo";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Youtube from "./pages/Youtube";

function App() {
  return (
    <div className="App min-h-full scroll-smooth font-['Ubuntu',sans-serif] bg-cyan-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/youtube' element={<Youtube />}></Route>
          <Route path='/youtube/:id' element={<YoutubeVideo />}></Route>
          <Route path='/media' element={<Media />}></Route>
        </Routes>
      </BrowserRouter>
      {}
    </div>
  );
}

export default App;
