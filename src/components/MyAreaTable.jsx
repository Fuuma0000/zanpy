import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(type, name, states, memos) {
  return { type, name, states, memos };
}

const rows = [
  createData("うさぎ", "キャロット", 0, "どっか行った"),
  createData("うさぎ", "ぴょんすけ", 0, ""),
  createData("うさぎ", "ミッフィー", 1, ""),
  createData("うさぎ", "ピーター", 2, ""),
  createData("レッサーパンダ", "ラスカル", 1, ""),
  createData("レッサーパンダ", "メイ", 1, ""),
  createData("リスざる", "ジュリアン", 0, ""),
];

export default function MyAreaTable() {
  return (
    <div className='fixed right-0 mr-40 mt-16 w-[1240px]'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell className='w-[240px]'>種類</StyledTableCell>
              <StyledTableCell className='w-[240px]'>名前</StyledTableCell>
              <StyledTableCell className='w-[240px]'>
                ステータス
              </StyledTableCell>
              <StyledTableCell>メモ</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.type}>
                <StyledTableCell component='th' scope='row'>
                  {row.type}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell align='center'>{row.states}</StyledTableCell>
                <StyledTableCell>{row.memos}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
