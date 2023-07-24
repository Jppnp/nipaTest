import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
