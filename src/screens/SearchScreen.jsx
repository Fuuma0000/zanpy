import React from "react";
import Header from "./Header";
import SearchBox from "../components/SearchBox";
import { useSetRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";

const SearchScreen = () => {
  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  //初回レンダリング時にmyAreaOpenStateをfalseにする
  setMyAreaOpen(false);

  return (
    <>
      <Header></Header>
      {/* TODO:やる */}
      {/* 検索ボックス */}
      <SearchBox></SearchBox>
      {/* 検索結果テーブル */}
    </>
  );
};

export default SearchScreen;
