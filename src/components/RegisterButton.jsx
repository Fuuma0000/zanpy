import React from "react";
import Button from "@mui/material/Button";

const RegisterButton = () => {
  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: "#A0E99E",
        fontWeight: 900,
        fontSize: 24,
        position: "absolute",
        bottom: 60,
        right: 250,
      }}
      className='w-40 h-14'
    >
      登録
    </Button>
  );
};

export default RegisterButton;
