import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import MyAreaTable from "../components/MyAreaTable";
import RegisterButton from "../components/RegisterButton";

const MyAreaScreen = () => {
  return (
    <div className=''>
      <Header />
      <SearchBox />
      <MyAreaTable></MyAreaTable>
      <RegisterButton></RegisterButton>
    </div>
  );
};

export default MyAreaScreen;
