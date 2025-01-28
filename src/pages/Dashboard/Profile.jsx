import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import getUserInfo from "../../hooks/useRoutesInfo";

const Profile = () => {
  const { name, phone } = getUserInfo();

  return (
    <>
      <div className="flex gap-10 items-center px-[30px] py-[22px] border-b-[2px] border-[#94a3b8]">
        <FaArrowLeft />
        <div>
          <h2 className="font-bold text-[20px] leading-[26px]">{name || "Unknown"}</h2>
          <p className="text-[#666666]">Phone: {phone || "Not available"}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
