import React, { useState } from "react";
import { WiStars } from "react-icons/wi";
import AvatarIcon from "../../assets/images/avatar.png";
import  Input  from "../../components/Input";
import { MdOutlineGifBox, MdOutlineImage } from "react-icons/md";
import { RiBarChart2Fill, RiCalendarScheduleLine, RiEmojiStickerLine } from "react-icons/ri";
import Button from "../../components/Button";
import Designsta from "../../assets/images/user.png"
import Loading from "../../assets/images/loading.png"
import PostItem from "../../components/PostItem"


const Home = () => {
  const [isLoading , setisLoading]= useState(false)
  const [postImg, setPostImg]  = useState(null)
  const userInfo = JSON.parse(localStorage.getItem("user_info"))
  const [postLsit,setpostList] = useState([
    {
        id: 1,
        avatarImg: Designsta,
        username: "Designsta",
        nicname: "@inner • 25m",
        postContent: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
        commentCount: 10,
        replyCount: 1,
        isLiked: false,
        likeCount: 8,
        forwardCount: 0,
        statistics: 0,
        postImg: Designsta
    }
  ])
  function handleAddPost(e){
    e.preventDefault()
    const data = {
      id:postLsit.length ? postLsit[postLsit.length - 1].id +1  :1,
      imgUrl:AvatarIcon,
      username:userInfo.name,
      nickname:userInfo.email ? userInfo.email : "-",
      postContent:e.target.postContent.value,
      commentCount:0,
      replyCount:0,
      isLiked:false,
      forwardCount:0,
      statistics:0,
      postImg:postImg
    }  
    setisLoading(true)
  
    setTimeout(() => {
      setisLoading(() => {
        setisLoading(false)
        setpostList([...postLsit,data])
      })
    }, 1000);
  }
  return (
    <div>
      <div className="p-5 border-b-[2px] border-slate-400 flex items-center justify-between">
        <h2 className="font-bold text-[24px]">Home</h2>
        <button>
          <WiStars size={22} />
        </button>
      </div>
      <form onSubmit={handleAddPost} className="relative p-5 border-b-[2px] justify-between border-slate-400">
        <div className="flex gap-[15px] mb-7">
          <img src={AvatarIcon} alt="Avatar icon" width={60} height={60} />
          <div className="w-[90%]">
            <Input  
              extraClass="!w-full h-10 !p-0 border-none font-semibold text-[22px]"
              placeholder="What's happening"
              name={"postContent"}
              type={"text"}
            />
            <div className="flex gap-2 mt-3" >
            <label>
              <input onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} type="file" className=" hidden "  />
            <MdOutlineImage />
            </label>
              <MdOutlineGifBox className="cursor-pointer"/>
              <RiBarChart2Fill className="cursor-pointer"/>
              <RiEmojiStickerLine className="cursor-pointer"/>
              <RiCalendarScheduleLine className="cursor-pointer"/>
          </div>
          </div>
        </div>
        <Button isLoading={isLoading} loadingImg={Loading}  extraClass={"!w-[108px] !py-4 absolute bottom-1 right-5"} title={"Tweet"}/>

      </form>
      <ul className="">
        {postLsit.map(item => <PostItem key={item.id} item={item}/>)}
      </ul>
    </div>
  );
};

export default Home;