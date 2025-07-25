import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-xl text-center">Welcome to YouTube Clone</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

