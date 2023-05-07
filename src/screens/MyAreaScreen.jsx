import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import MyAreaTable from "../components/MyAreaTable";
import RegisterButton from "../components/RegisterButton";

const MyAreaScreen = () => {
  return (
    <>
      <Header />
      <SearchBox />
      <MyAreaTable />
      <RegisterButton />
    </>
  );
};

export default MyAreaScreen;
