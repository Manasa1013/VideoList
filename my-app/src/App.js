import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App bg-red-900">
      <h1>VIDELOST</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Videolist</h1>
            </>
          }
        ></Route>
        <Route path="*" element={<h1>Videolist</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
