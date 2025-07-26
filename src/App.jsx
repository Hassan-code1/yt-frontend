import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="upload" element={<Upload />} />
          <Route path="video/:id" element={<Video />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

