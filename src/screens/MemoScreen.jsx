import React from "react";
import Header from "./Header";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const MemoScreen = () => {
  const navigate = useNavigate();

  //keyを設定するための関数
  function createName(text, time) {
    return { text, time };
  }

  //Datetimeでやると思うけど、とりあえずは文字列で
  const [memos, setMemos] = useState([
    createName("右足と右手首に怪我あり", "2023/04/23 12:00"),
    createName("治療完了", "2023/04/23 14:00"),
    createName("呼吸器に異常あり", "2023/04/23 14:30"),
    createName("ただのしゃっくりでした", "2023/04/23 15:02"),
  ]); // メモの配列を管理するstate

  return (
    <>
      <Header />
      {/* 左の部分を押したら担当エリアの画面に戻る */}
      <button className='fixed top-48 left-40'>
        <ArrowBackIosNewIcon
          className='text-test'
          sx={{ fontSize: "32px" }}
          onClick={() => navigate("/my-area")}
        />
      </button>
      {/* メモ本体を表示する部分 */}
      <div className='flex flex-col items-center mt-24'>
        {memos.map((memo, index) => (
          // <div className='bg-white border-x-4 border-b-4 flex justify-between w-6/12 h-12'>
          <div className='bg-white border-x-4 border-b-4 flex justify-between w-[960px] h-12'>
            <div className='flex justify-center items-center text-xl font-black text-test ml-6'>
              {memo.text}
            </div>
            <div className='flex justify-center items-end text-sm font-medium text-my_gray mr-4'>
              {memo.time}
            </div>
          </div>
        ))}
      </div>
      {/* 追加用の入力欄とボタン */}
      <div className='flex justify-center items-center mt-24'>
        {/* <TextField
          className='bg-white'
          sx={{
            //横幅を最大にする
            width: "40%",
          }}
        /> */}
        <input className='rounded-md w-[960px] h-12' type='text' />
        <Button
          variant='contained'
          style={{
            backgroundColor: "#A0E99E",
            fontWeight: 900,
            fontSize: 24,
            letterSpacing: 14,
            textIndent: 14,
            marginLeft: 10,
            // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          }}
          className='w-36 h-12 '
        >
          追加
        </Button>
      </div>
    </>
  );
};

export default MemoScreen;
