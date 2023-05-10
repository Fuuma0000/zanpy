import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import MyAreaTable from "../components/MyAreaTable";
import { useSetRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";

const MyAreaScreen = () => {
  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  //初回レンダリング時にmyAreaOpenStateをtrueにする
  setMyAreaOpen(true);
  return (
    <>
      <Header />
      <SearchBox />
      <MyAreaTable />
    </>
  );
};

export default MyAreaScreen;
