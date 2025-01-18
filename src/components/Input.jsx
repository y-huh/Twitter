import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Input = ({name, type, placeholder, extraClass, defaultValue}) => {
  const [showPass, setShowPass] = useState(false)

  return (
    <>
    {type == "password" ? 
      <label className='relative w-full'>
        <input defaultValue={defaultValue} required className={`py-[23px] text-[20px] w-full focus:border-[#1DA1F2] pl-[20px] outline-none border-[1px] border-[#00000033] rounded-[6px] ${extraClass}`} name={name} type={showPass ? "text" : type} placeholder={placeholder} />
        <div onClick={() => setShowPass(!showPass)} className='absolute top-5 my-auto right-3 cursor-pointer'>
          {showPass ? <FaEyeSlash size={"35px"}/> : <FaEye size={"35px"}/>}
        </div>
      </label>
     : 
      <input defaultValue={defaultValue} required className={`py-[23px] text-[20px] focus:border-[#1DA1F2] pl-[20px] outline-none border-[1px] border-[#00000033] rounded-[6px] ${extraClass}`} name={name} type={type} placeholder={placeholder} />
      }
    </>
  )
}

export default Input