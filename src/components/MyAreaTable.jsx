import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StatusVisual from "./StatusVisual";
import { useState } from "react";
import StatusSelect from "./StatusSelect";

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

function createData(type, name, states, memos) {
  return { type, name, states, memos };
}

export default function MyAreaTable() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [rows, setRows] = useState([
    createData("うさぎ", "キャロット", 3, "どっか行った"),
    createData("うさぎ", "ぴょんすけ", 0, ""),
    createData("うさぎ", "ミッフィー", 1, ""),
    createData("うさぎ", "ピーター", 2, ""),
    createData("レッサーパンダ", "ラスカル", 1, ""),
    createData("レッサーパンダ", "メイ", 3, ""),
    createData("リスざる", "ジュリアン", 0, ""),
  ]);

  const handleChangeStatus = (event, index) => {
    const newRows = [...rows];
    console.log(event.target.value);
    newRows[index].states = parseInt(event.target.value);
    console.log(newRows);
    setRows(newRows);
  };

  return (
    <div className='fixed right-0 mr-60 mt-24 w-[1240px]'>
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
              <StyledTableRow key={row.index}>
                <StyledTableCell component='th' scope='row' align='center'>
                  {row.type}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.name}</StyledTableCell>
                <StyledTableCell align='center'>
                  {/* <div className='flex items-center'>
                    <StatusVisual status={row.states} />
                    <select
                      value={selectedStatus}
                      onChange={(event) => handleChangeStatus(event, index)}
                    >
                      <option value={0}>怪我あり</option>
                      <option value={1}>脱走中</option>
                      <option value={2}>迷子保護</option>
                      <option value={3}>無事</option>
                      <option value={4}>不明</option>
                    </select>
                  </div> */}
                  <StatusSelect></StatusSelect>
                </StyledTableCell>
                <StyledTableCell align='center'>{row.memos}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const rows = [
  createData("うさぎ", "キャロット", 3, "どっか行った"),
  createData("うさぎ", "ぴょんすけ", 0, ""),
  createData("うさぎ", "ミッフィー", 1, ""),
  createData("うさぎ", "ピーター", 2, ""),
  createData("レッサーパンダ", "ラスカル", 1, ""),
  createData("レッサーパンダ", "メイ", 3, ""),
  createData("リスざる", "ジュリアン", 0, ""),
];
