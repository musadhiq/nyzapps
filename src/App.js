import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./components/Header/Header";
import AboutMain from "./pages/About/About";
import DownloadMain from "./pages/Download/Download";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/downloads" element={<DownloadMain />} />
      </Routes>
    </div>
  );
}

export default App;
