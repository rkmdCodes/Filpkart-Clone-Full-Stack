import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { Box } from "@mui/material";
import NavBar from "./components/Home/NavBar";
import DataProvider from "./context/dataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/details/DetailView";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
