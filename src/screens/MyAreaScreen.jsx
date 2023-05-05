import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";

const MyAreaScreen = () => {
  return (
    <div className='h-screen bg-sub_color'>
      <Header />
      <SearchBox />
    </div>
  );
};

export default MyAreaScreen;
