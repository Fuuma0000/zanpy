import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MyAreaScreen from "./screens/MyAreaScreen";
import MemoScreen from "./screens/MemoScreen";
import SearchScreen from "./screens/SearchScreen";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path={`/my-area`} element={<MyAreaScreen />} />
          <Route path={`/login`} element={<LoginScreen />} />
          <Route path={`/memo`} element={<MemoScreen />} />
          <Route path={`/search`} element={<SearchScreen />} />
          <Route path={`/*`} element={<LoginScreen />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
