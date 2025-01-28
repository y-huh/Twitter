import React from 'react'

const Button = ({title, type, extraClass, isLoading, loadingImg,onClick}) => {
  return (
    <button onClick={onClick} className={`${extraClass} hover:opacity-[80%] duration-300 w-full py-[18px] bg-[#1DA1F2] text-white text-center font-bold text-[18px] rounded-[76px]`} type={type}>
      {isLoading ? 
        <img className='scale-[2] mx-auto' src={loadingImg} alt="Loading Img" width={30} height={30} />
        : title
      }
    </button>
  )
}

export default Button