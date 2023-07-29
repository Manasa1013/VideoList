import { Routes, Route } from "react-router-dom";

import { Explore, Home, Playlists, SingleVideoPage, WatchLater } from "./Pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/watchlater" element={<WatchLater />}></Route>
        <Route path="/playlists" element={<Playlists />}></Route>
        <Route path={`/videos/:videoId`} element={<SingleVideoPage />}></Route>

        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
