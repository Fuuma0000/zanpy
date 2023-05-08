import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import StatusSelect from "./StatusSelect";
import DetailButton from "../components/DetailButton";
import Button from "@mui/material/Button";

const MyAreaTable = () => {
  function createData(type, name, states, memos) {
    return { type, name, states, memos };
  }

  const [rows, setRows] = useState([
    createData("うさぎ", "キャロット", 6, "どっか行った"),
    createData("うさぎ", "ぴょんすけ", 6, "どりゃああああ"),
    createData("うさぎ", "ミッフィー", 6, "ぽにょだよー"),
    createData("うさぎ", "ピーター", 6, "ちくわの中身を覗いてしまった"),
    createData("レッサーパンダ", "ラスカル", 1, ""),
    createData("レッサーパンダ", "メイ", 3, ""),
    createData("リスざる", "ジュリアン", 0, ""),
    createData("リスざる", "ジュリアン", 0, ""),
    createData("リスざる", "ジュリアン", 0, ""),
    createData("リスざるwww", "ジュリアン", 0, ""),
  ]);

  const handleChangeStatus = (e, index) => {
    const newRows = [...rows];
    newRows[index].states = e.value;
    setRows(newRows);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#E0E0E0",
      color: theme.palette.common.black,
      fontWeight: 900,
      fontSize: 24,
      borderRight: "1px solid #ddd", // 右側に縦のボーダーを追加
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 24,
      borderRight: "1px solid #ddd", // 右側に縦のボーダーを追加
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    //これだと左の余白ができる
    //両方とも2xlだから調整ができない

    <div className='absolute right-0 mr-20 pt-24 pb-20 w-[70%] pc:w-[72%] '>
      {/* <div className='absolute right-0 mr-20 pt-24 pb-20 w-9/12'> */}
      {/* こっちでもいいかも */}
      {/* <div className='absolute right-0 mr-40 pt-24 pb-20 w-8/12'> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center' className='w-2/12'>
                種類
              </StyledTableCell>
              <StyledTableCell align='center' className='w-2/12'>
                名前
              </StyledTableCell>
              <StyledTableCell align='center' className='w-2/12'>
                ステータス
              </StyledTableCell>
              <StyledTableCell align='center' className=''>
                メモ
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component='th' scope='row' align='center'>
                  {row.type}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.name}</StyledTableCell>
                <StyledTableCell align='center'>
                  <StatusSelect
                    states={row.states}
                    handleChangeStatus={handleChangeStatus}
                    index={index}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: "auto" }}>{row.memos}</div>
                    <DetailButton />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='relative ml-auto mr-0 mt-10 flex justify-end'>
        <Button
          variant='contained'
          style={{
            backgroundColor: "#A0E99E",
            fontWeight: 900,
            fontSize: 36,
            letterSpacing: 14,
            textIndent: 14,
          }}
          className='w-56 h-16'
        >
          登録
        </Button>
      </div>
    </div>
  );
};

export default MyAreaTable;
