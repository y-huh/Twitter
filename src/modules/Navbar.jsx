import React, { useContext, useState } from 'react';
import Logo from "../assets/images/logo.svg";
import { navbarList } from '../hooks/useRoute';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { IoIosMore } from 'react-icons/io';
import AvatarIcon from "../assets/images/avatar.png";
import { Modal } from '../components/Modal';
import { Context } from '../context/Context';

const Navbar = () => {
  const userInfo = JSON.parse(localStorage.getItem("user_info")) || {}
  const [logOutModal, setlogOutModal] = useState(false);
  const [activeIcon, setActiveIcon] = useState("Home");
  const {setToken} = useContext(Context)

  function handelLogOut(){
    setlogOutModal(true)
    location.replace("/")
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <div className="w-[24%] h-[100vh] border-r-[2px] border-slate-400 overflow-y-auto pl-12 pt-[31px]">
      <img 
        className="mb-[49px]" 
        src={Logo} 
        alt="Logo" 
        width={40} 
        height={33} 
      />
      <nav className="space-y-[37px]">
        {navbarList.map(item => (
          <NavLink 
            onClick={() => setActiveIcon(item.title)} 
            className={`flex items-center gap-[20px]`} 
            key={item.id}
            to={item.path}
          >
            {activeIcon === item.title ? item.activeIcon : item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <Button 
        title="Tweet" 
        type="button" 
        extraClass={'!w-[230px] !mt-[30px]'} 
      />
      <div 
        onClick={() => setlogOutModal(true)} 
        className='flex gap-6 items-center mt-40 cursor-pointer'
      >
        <img src={AvatarIcon} alt="Avatar" width={50} height={50} />
        <div className='flex flex-col'>
          <strong className='font-semibold text-[16px] mb-[2px]'>{userInfo?.name}</strong>
          <p className='opacity-60'>{userInfo.email ? userInfo.email : "-"}</p>
        </div>
        <IoIosMore className='cursor-pointer' size={20} />
      </div>
      {logOutModal && (
        <Modal openModal={logOutModal} setOpenModal={setlogOutModal}>
          <h2 className='text-[25px] text-center'>Do you really wanna quit?</h2>
          <div className='flex items-center mt-28 justify-center gap-5'>
              <Button onClick={() => setlogOutModal(false)} title={"Cancel"} extraClass={"!w-[200px] "}/>
              <Button onClick={handelLogOut} title={"Log Out"} extraClass={"!w-[200px] bg-red-500"}/>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
