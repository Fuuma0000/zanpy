import React from "react";
import Button from "@mui/material/Button";

const DetailButton = () => {
  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: "#706F6F",
        fontWeight: 900,
        fontSize: 24,
      }}
      className='w-40 h-14'
    >
      詳細
    </Button>
  );
};

export default DetailButton;
