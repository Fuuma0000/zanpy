import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MyAreaScreen from "./screens/MyAreaScreen";
import MemoScreen from "./screens/MemoScreen";

function App() {
  const isMyArea = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/my-area`} element={<MyAreaScreen />} />
        <Route path={`/login`} element={<LoginScreen />} />
        <Route path={`/memo`} element={<MemoScreen />} />
        <Route path={`/*`} element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
