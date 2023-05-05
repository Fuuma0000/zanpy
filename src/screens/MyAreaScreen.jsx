import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import MyAreaTable from "../components/MyAreaTable";

const MyAreaScreen = () => {
  return (
    <div className='h-screen bg-sub_color'>
      <Header />
      <SearchBox />
      <MyAreaTable></MyAreaTable>
    </div>
  );
};

export default MyAreaScreen;
