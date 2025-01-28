import React from 'react'
import { BiRepost } from 'react-icons/bi'
import { BsUpload } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { LuChartNoAxesColumn } from 'react-icons/lu'
import Reaction from './Reaction'

const PostItem = ({item}) => {
  return (
    <li className='border-b-[2px] flex items-start gap-[15px] border-slate-400 p-5'>
      <img src={item.imgUrl} alt="Avatar Icon" width={60} height={60} />
      <div className='w-full'>
        <div className='flex items-center gap-[5px] mb-[5px]]'>
          <strong className='font-bold text-[20px]'>{item.username}</strong>
          <span className='text-[16px] opacity-60'>{item.nicname}</span>
        </div>
        <p className='mb-[22px] text-[18px] '>{item.postContent}</p>
        <div className="flex items-center gap-[140px]">
                <Reaction icon={<FaRegComment size={"20px"} />} count={item.commentCount} />
                <Reaction icon={<BiRepost size={"20px"} />} count={item.replyCount} />
                <Reaction icon={<FaRegHeart size={"20px"} />} count={item.likeCount} />
                <Reaction icon={<BsUpload size={"20px"} />} count={item.forwardCount} />
                <Reaction icon={<LuChartNoAxesColumn size={"20px"} />} count={item.statisticsCount} />
        </div>

      </div>
    </li>
  )
}

export default PostItem
