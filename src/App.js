import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MyAreaScreen from "./screens/MyAreaScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/担当エリア`} element={<MyAreaScreen />} />
        <Route path={`/ログイン`} element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
