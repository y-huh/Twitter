import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import getUserInfo from "../../hooks/useRoutesInfo";
import profileImg from "../../assets/images/profile_img.webp";
import avatarIcon from "../../assets/images/avatar.png";
import Button from "../../components/Button";
import { IoLink } from "react-icons/io5";
import { PiBalloonFill } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import { FaLocationPin } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { PATH } from "../../hooks/usePath";
import PostItem from "../../components/PostItem";

const Profile = () => {
  const nestedList = [
    {
      id: 1,
      path: PATH.profileTweets,
      title: "Tweets",
    },
    {
      id: 2,
      path: PATH.profileTweetsReplies,
      title: "Tweets replies",
    },
    {
      id: 3,
      path: PATH.profileMedia,
      title: "Media",
    },
    {
      id: 4,
      path: PATH.profileLikes,
      title: "Likes",
    },
  ];
  const { name, phone, postLsit } = getUserInfo();
  const userBio = [
    {
      icon: <FaLocationPin />,
      title: "Andijon",
    },
    {
      icon: <IoLink />,
      title: "t.me/asadullohsi",
    },
    {
      icon: <PiBalloonFill />,
      title: "Born November 18, 2003",
    },
    {
      icon: <CgCalendarDates />,
      title: "Joined May 2020",
    },
  ];

  return (
    <>
      <div className="flex gap-10 items-center px-[30px] py-[22px] border-b-[2px] border-[#94a3b8]">
        <FaArrowLeft />
        <div>
          <h2 className="font-bold text-[20px] leading-[26px]">
            {name || "Unknown"}
          </h2>
          <p className="text-[#666666]">Tweets: {postLsit.length}</p>
        </div>
      </div>
      <img
        className="h-[280px] object-cover  "
        src={profileImg}
        alt="Profile img"
        width="100%"
        height={200}
      />

      <div className="flex items-end justify-between mt-[-70px] px-[25px]">
        <img src={avatarIcon} alt="Avatar img" width={150} height={150} />
        <button className="py-[10px] px-[15px] border-[2px] border-slate-400 rounded-[50px]">
          Edit profile
        </button>
      </div>

      <div className="px-[25px] mt-[-10px]">
        <strong className="font-bold text-[24px] leading-[31px]">{name}</strong>
        <p className="opacity-60 text-[16px] leading-[19px] mt-[15px]">
          UX/UI designer at{" "}
          <a className="text-blue-500" href="#">
            3abutechuz
          </a>
        </p>
        <div className="flex items-center justify-between mt-[15px]">
          {userBio.map((item) => (
            <a
              key={item.title}
              href={`http://${item.title}`}
              className="flex  items-center gap-[5px]"
            >
              {item.icon}
              <span>{item.title}</span>
            </a>
          ))}
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="flex gap-[10px]">
            <span>
              <strong>67</strong> Following
            </span>
          </div>
          <div className="flex gap-[10px]">
            <span>
              <strong>47</strong> Followers
            </span>
          </div>
        </div>
      </div>
      <div className="px-[25px] mt-[40px] flex items-center justify-between border-b-[2px] border-slate-400 nested-wrapper">
        {nestedList.map((item) => (
          <NavLink
            className={"text-[18px] pb-[19px] relative"}
            key={item.id}
            to={item.path}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <Outlet/>
      <ul>
      {postLsit.length > 0 ? (
        postLsit.map(item => <PostItem key={item.id} item={item} />)
      ) : (
        <p>No tweets available</p>
      )}
    </ul>
    </>
  );
};

export default Profile;
