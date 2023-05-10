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
import { useRecoilValue } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const MyAreaTable = () => {
  const isMyAreaOpen = useRecoilValue(myAreaOpenState);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  //keyを設定するための関数
  function createData(area, type, name, states, memos, memoTime) {
    return { area, type, name, states, memos, memoTime };
  }

  const [rows, setRows] = useState([
    createData(
      "ふれあい",
      "うさぎ",
      "キャロット",
      6,
      "どっか行った",
      "10/10 10:00"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ぴょんすけ",
      6,
      "どりゃああああ",
      "10/10 10:06"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ミッフィー",
      6,
      "ぽにょだよー",
      "10/10 11:10"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ピーター",
      6,
      "ちくわの中身を覗いてしまった",
      "10/10 12:00"
    ),
    createData("ふれあい", "レッサーパンダ", "ラスカル", 1, "", "10/11 10:00"),
    createData(
      "ふれあい",
      "レッサーパンダ",
      "メイ",
      2,
      "お腹すいた",
      "10/11 14:00"
    ),
    createData("ふれあい", "リスざる", "ジュリアン", 0, "", "10/11 18:00"),
    createData("ふれあい", "リスざる", "ジュリアン", 0, "", "10/11 20:00"),
    createData("ふれあい", "リスざる", "ジュリアン", 0, "", "10/11 23:00"),
    createData("ふれあい", "リスざるwww", "ジュリアン", 0, "", "10/14 10:00"),
  ]);

  const handleChangeStatus = (e, index) => {
    const newRows = [...rows];
    newRows[index].states = e.value;
    setRows(newRows);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#E0E0E0",
      color: "#706F6F", //text-test
      fontWeight: 900,
      fontSize: 20,
      borderRight: "1px solid #ddd", // 右側に縦のボーダーを追加
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
      borderRight: "1px solid #ddd",
      // color: "#706F6F", //text-test
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
    <div className='absolute right-0 mr-20 pt-24 pb-20 w-[73%] '>
      <TableContainer component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              {!isMyAreaOpen && (
                <StyledTableCell
                  align='center'
                  className={isMyAreaOpen ? "w-2/12" : "w-parcent-12"}
                >
                  エリア
                </StyledTableCell>
              )}
              <StyledTableCell
                align='center'
                className={isMyAreaOpen ? "w-2/12" : "w-parcent-12"}
              >
                種類
              </StyledTableCell>
              <StyledTableCell
                align='center'
                className={isMyAreaOpen ? "w-2/12" : "w-parcent-12"}
              >
                名前
              </StyledTableCell>
              <StyledTableCell
                align='center'
                className={isMyAreaOpen ? "w-2/12" : "w-parcent-12"}
              >
                ステータス
              </StyledTableCell>
              <StyledTableCell align='center'>メモ</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                {!isMyAreaOpen && (
                  <StyledTableCell component='th' scope='row' align='center'>
                    {row.area}
                  </StyledTableCell>
                )}
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
                    <div className='flex justify-center items-end text-sm font-medium text-gray-500 mr-4'>
                      {row.memoTime}
                    </div>
                    <button className=' bg-test rounded-full h-8 w-8 flex items-center justify-center'>
                      <ArrowForwardIosIcon
                        className='text-white'
                        sx={{ fontSize: "20px" }}
                        onClick={() => navigate("/memo")}
                      />
                    </button>
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
            backgroundColor: "#88E186", //bg-main-green
            fontWeight: 900,
            fontSize: 36,
            letterSpacing: 14,
            textIndent: 14,
            borderRadius: 10,
          }}
          className='w-56 h-16'
          onClick={handleOpenModal}
        >
          登録
        </Button>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default MyAreaTable;
