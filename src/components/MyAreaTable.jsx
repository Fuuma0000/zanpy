import React from "react";
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
import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const MyAreaTable = ({ rows, setRows }) => {
  const isMyAreaOpen = useRecoilValue(myAreaOpenState);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      backgroundColor: "#E0E0E0", //灰色
      color: "#706F6F", //text-test
      fontWeight: 900,
      fontSize: 20,
      borderRight: "1px solid #ddd",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
      borderRight: "1px solid #ddd",
    },
  }));

  //テーブルを偶数行と奇数行で色分けする
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover, //グレー
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
                {/* マイエリアならエリアを表示しない */}
                {!isMyAreaOpen && (
                  <StyledTableCell component='th' scope='row' align='center'>
                    {row.area}
                  </StyledTableCell>
                )}
                {/* 種族 */}
                <StyledTableCell component='th' scope='row' align='center'>
                  {row.type}
                </StyledTableCell>
                {/* 名前 */}
                <StyledTableCell align='center'>{row.name}</StyledTableCell>
                {/* ステータス */}
                <StyledTableCell align='center'>
                  <StatusSelect
                    states={row.states}
                    handleChangeStatus={handleChangeStatus}
                    index={index}
                    isMyAreaOpen={isMyAreaOpen}
                  />
                </StyledTableCell>
                {/* メモ */}
                <StyledTableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {/* メモ内容 */}
                    <div style={{ marginRight: "auto" }}>{row.memos}</div>
                    {/* 時間 */}
                    <div className='flex justify-center items-end text-sm font-medium text-gray-500 mr-4'>
                      {row.memoTime}
                    </div>
                    {/* 詳細ボタン */}
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
      {/* マイエリアなら登録ボタンを表示する */}
      {isMyAreaOpen && (
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
      )}
      {/* 登録ボタンを押すとモーダルが開く */}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default MyAreaTable;
