import React from "react";

const StatusVisual = ({ status }) => {
  let color;
  let text;
  if (status === 0) {
    color = "bg-red-300";
    text = "怪我あり";
  } else if (status === 1) {
    color = "bg-red-600";
    text = "脱走中";
  } else if (status === 2) {
    color = "bg-yellow-200";
    text = "迷子保護";
  } else if (status === 3) {
    color = "bg-main_green";
    text = "無事";
  } else {
    color = "bg-gray-500";
    text = "不明";
  }

  return (
    <div className={`w-28 h-8 rounded-2xl text-white ${color}`}>{text}</div>
  );
};

export default StatusVisual;
