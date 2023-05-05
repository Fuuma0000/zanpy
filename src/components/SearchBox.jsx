import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SearchBox = () => {
  return (
    <div className='fixed bg-white left-16 top-72 rounded-3xl shadow-xl'>
      {/* 検索ボックス */}
      <Typography component='div'>
        <div className='flex flex-col gap-8 p-12 '>
          <Autocomplete
            disablePortal
            options={types}
            //文字を太くする
            // sx={{ fontWeight: 900 }} これではならなかった
            // InputLabelProps={{
            //   style: {
            //     color: "#706F6F",
            //     fontWeight: 900,
            //   },
            // }} これではならなかった
            sx={{ fontWeight: 900 }}
            renderInput={(params) => <TextField {...params} label='種類' />}
          />
          <TextField
            id='outlined-basic'
            label='名前'
            variant='outlined'
            //font-weightをboldにする
            // sx={{ fontWeight: 900 }} これではならなかった
            InputLabelProps={{
              style: {
                color: "#706F6F",
                fontWeight: 900,
              },
            }}
          />
          {/* <Autocomplete
            disablePortal
            options={status}
            sx={{ width: 300, fontWeight: "bold" }}
            renderInput={(params) => (
              <TextField {...params} label='ステータス' />
            )}
          /> */}
          <Autocomplete
            disablePortal
            options={status}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='ステータス'
                InputLabelProps={{
                  style: {
                    color: "#706F6F",
                    fontWeight: 900,
                  },
                }}
              />
            )}
          />

          <div className='flex justify-center'>
            <Button
              variant='contained'
              style={{ backgroundColor: "#A0E99E" }}
              className='w-32'
            >
              検索
            </Button>
          </div>
        </div>
      </Typography>
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
  { label: "怪我あり", id: 0 },
  { label: "脱走中", id: 1 },
  { label: "迷子保護", id: 2 },
  { label: "無事", id: 3 },
];
