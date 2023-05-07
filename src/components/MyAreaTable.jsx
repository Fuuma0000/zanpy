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

const MyAreaTable = () => {
  function createData(type, name, states, memos) {
    return { type, name, states, memos };
  }

  const [rows, setRows] = useState([
    createData("うさぎ", "キャロット", 3, "どっか行った"),
    createData("うさぎ", "ぴょんすけ", 0, "どりゃああああ"),
    createData("うさぎ", "ミッフィー", 1, ""),
    createData("うさぎ", "ピーター", 2, ""),
    createData("レッサーパンダ", "ラスカル", 1, ""),
    createData("レッサーパンダ", "メイ", 3, ""),
    createData("リスざる", "ジュリアン", 0, ""),
    createData("リスざる", "ジュリアン", 0, ""),
    createData("リスざる", "ジュリアン", 0, ""),
    createData("リスざるwww", "ジュリアン", 0, ""),
  ]);

  const handleChangeStatus = (event, index) => {
    const newRows = [...rows];
    newRows[index].states = parseInt(event.target.value);
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
    <div className='absolute right-0 mr-60 pt-24 pb-44 w-[1240px]'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center' className='w-[240px]'>
                種類
              </StyledTableCell>
              <StyledTableCell align='center' className='w-[240px]'>
                名前
              </StyledTableCell>
              <StyledTableCell align='center' className='w-[240px]'>
                ステータス
              </StyledTableCell>
              <StyledTableCell align='center'>メモ</StyledTableCell>
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
                  <StatusSelect states={row.states}></StatusSelect>
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
    </div>
  );
};

export default MyAreaTable;
