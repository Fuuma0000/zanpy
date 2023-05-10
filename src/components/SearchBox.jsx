import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";

const SearchBox = () => {
  const isMyAreaOpen = useRecoilValue(myAreaOpenState);

  return (
    <div className='fixed bg-white left-16 top-72 rounded-3xl shadow-xl'>
      {/* 検索ボックス */}
      <div className='flex flex-col gap-6 px-12 pt-2 pb-6  '>
        {!isMyAreaOpen && (
          <Autocomplete
            disablePortal
            options={areae}
            sx={{
              width: 200,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='エリア'
                InputLabelProps={{
                  style: {
                    color: "#706F6F",
                    fontWeight: 900,
                    //文字を封得させたいけど、外枠からはみ出る
                    fontSize: 18,
                    position: "relative",
                    top: 28,
                  },
                }}
              />
            )}
          />
        )}

        <Autocomplete
          disablePortal
          options={types}
          sx={{
            width: 200,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='種類'
              InputLabelProps={{
                style: {
                  color: "#706F6F",
                  fontWeight: 900,
                  //文字を封得させたいけど、外枠からはみ出る
                  fontSize: 22,
                  position: isMyAreaOpen && "relative",
                  top: isMyAreaOpen && 28,
                  //網ちょい右にしたいけど、leftをつけたら、検索ボックスがずれる
                  // left: 5,
                },
              }}
            />
          )}
        />

        <TextField
          id='outlined-basic'
          label='名前'
          sx={{
            width: 200,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
          }}
          variant='outlined'
          InputLabelProps={{
            style: {
              color: "#706F6F",
              fontWeight: 900,
              //文字を封得させたいけど、外枠からはみ出る
              fontSize: 22,
            },
          }}
        />

        <Autocomplete
          disablePortal
          options={status}
          sx={{
            width: 200,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='ステータス'
              InputLabelProps={{
                style: {
                  color: "#706F6F",
                  fontWeight: 900,
                  //文字を封得させたいけど、外枠からはみ出る
                  fontSize: 18,
                },
              }}
            />
          )}
        />

        <div className='flex justify-center'>
          <Button
            variant='contained'
            style={{
              backgroundColor: "#88E186", //bg-main-green
              fontWeight: 900,
              fontSize: 24,
              position: "relative",
              top: 4,
              paddingRight: 10,
            }}
            className='w-36 h-12'
          >
            検索
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

const types = [
  { label: "イルカ", id: 0 },
  { label: "シャチ", id: 1 },
  { label: "キリン", id: 2 },
  { label: "ライオン", id: 3 },
  { label: "トラ", id: 4 },
  { label: "チンパンジー", id: 5 },
  { label: "うさぎ", id: 6 },
  { label: "レッサーパンダ", id: 7 },
  { label: "リスざる", id: 8 },
  { label: "フラミンゴ", id: 9 },
  { label: "ペンギン", id: 10 },
];

const status = [
  { label: "無事", id: 0 },
  { label: "怪我", id: 1 },
  { label: "脱走", id: 2 },
  { label: "不明", id: 3 },
];

const areae = [
  { label: "マリン", id: 0 },
  { label: "サバンナ", id: 1 },
  { label: "ジャングル", id: 2 },
  { label: "ふれあい", id: 3 },
  { label: "鳥ランド", id: 4 },
];
