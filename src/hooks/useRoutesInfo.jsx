import { useEffect, useState } from "react";

const getUserInfo = () => {
  const name = JSON.parse(localStorage.getItem("user_info")).name
  const phone = JSON.parse(localStorage.getItem("post_list")).phone
  const postLsit = JSON.parse(localStorage.getItem("post_list"));

  return { name, phone , postLsit};
};

export default getUserInfo;
