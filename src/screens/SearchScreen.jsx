import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import { useSetRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";
import MyAreaTable from "../components/MyAreaTable";

const SearchScreen = () => {
  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  //初回レンダリング時にmyAreaOpenStateをfalseにする
  setMyAreaOpen(false);

  return (
    <>
      <Header></Header>
      {/* 検索ボックス */}
      <SearchBox></SearchBox>
      {/* 検索結果テーブル */}
      <MyAreaTable></MyAreaTable>
    </>
  );
};

export default SearchScreen;
