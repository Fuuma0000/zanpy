import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import MyAreaTable from "../components/MyAreaTable";

const MyAreaScreen = () => {
  return (
    <>
      <Header />
      <SearchBox />
      <MyAreaTable />
    </>
  );
};

export default MyAreaScreen;
