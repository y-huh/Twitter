import React, { useContext, useState } from 'react'
import Logo from "../../assets/images/logo.svg"
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import Loading from "../../assets/images/loading.png"
import {Context} from "../../context/Context"
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {users, setToken} = useContext(Context)
  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)
    const data = {
      phoneNumberOrEmail:e.target.email.value,
      password:e.target.password.value
    }
    if(users.length > 0){
      const findUser = users.some(item => (item.email == data.phoneNumberOrEmail || item.phone == data.phoneNumberOrEmail) && item.password == data.password)
      const userData = users.find(item => (item.email == data.phoneNumberOrEmail || item.phone == data.phoneNumberOrEmail) && item.password == data.password)
      if(findUser){
        setTimeout(() => toast.success("Welcome"), 500)
        setTimeout(() => {
          setIsLoading(false)
          setToken(data)
          localStorage.setItem("user_info", JSON.stringify(userData))
        },1000)
      }
    }
    else{
      setTimeout(() => {
        toast.error("User is not defined")
        setIsLoading(false)
      },1000)
    }
  }

  return (
    <div className='w-[450px] mx-auto mt-[60px]'>
      <Toaster position="top-center" reverseOrder={false}/>
      <img className='mb-[36px]' src={Logo} alt="Site Logo" width={50} height={41} />
      <h1 className='font-extrabold text-[42px] mb-[36px]'>Log in to Twitter</h1>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-[25px] mb-10' autoComplete='off'>
          <Input name={'email'} type={'text'} placeholder={"Phone number, email address"}/>
          <Input name={'password'} type={'password'} placeholder={"Password"}/>
          <Button isLoading={isLoading} loadingImg={Loading} title={'Log In'} type={'submit'}/>
      </form>
      <div className='flex items-center justify-between'>
        <p className='text-[#1DA1F2] text-[18px]'>Forgot password?</p>
        <Link className='text-[#1DA1F2] text-[18px]' to={'/register'}>Sign up to Twitter</Link>
      </div>
    </div>
  )
}

export default Login