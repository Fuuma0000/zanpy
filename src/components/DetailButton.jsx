import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const DetailButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: "#706F6F",
        fontWeight: 900,
        fontSize: 20,
      }}
      className='w-24 h-10'
      // className='w-40 h-14'
      onClick={() => navigate("/memo")}
    >
      詳細
    </Button>
  );
};

export default DetailButton;
