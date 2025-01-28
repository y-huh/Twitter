import { useEffect, useState } from "react";

const getUserInfo = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_info"));
    if (userData) {
      setName(userData.name);
      setPhone(userData.phone);
    }
  }, []);   

  return { name, phone };
};

export default getUserInfo;
