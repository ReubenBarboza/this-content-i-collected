import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import YoutubeVideo from "./components/YoutubeVideo";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Youtube from "./pages/Youtube";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App min-h-full scroll-smooth font-['Ubuntu',sans-serif] bg-cyan-100">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/this-content-i-collected' element={<Home />} />
          <Route
            path='/this-content-i-collected/youtube'
            element={<Youtube />}
          ></Route>
          <Route
            path='/this-content-i-collected/youtube/:id'
            element={<YoutubeVideo />}
          ></Route>
          <Route
            path='/this-content-i-collected/media'
            element={<Media />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
