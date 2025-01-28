import React, { useContext, useState } from 'react';
import Logo from "../../assets/images/logo.svg";
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../../assets/images/loading.png";
import { Context } from "../../context/Context";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { setUsers, users } = useContext(Context);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [useEmail, setUseEmail] = useState(false);

  function handleRegisterSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      email: useEmail ? e.target.email.value : null,
    };

    // Check if the phone or email already exists
    const isDuplicate = users.some(
      (user) => user.phone === data.phone || (useEmail && user.email === data.email)
    );

    if (isDuplicate) {
      setTimeout(() => {
        toast.error("Phone number or email already registered");
        setIsLoading(false);
      }, 500);
      return;
    }

    setUsers([...users, data]);

    setTimeout(() => {
      toast.success("Successfully created an account");
      setIsLoading(false);
      navigate('/');
    }, 1000);
  }

  return (
    <div className="w-[670px] mx-auto mt-[60px]">
      <Toaster position="top-center" reverseOrder={false} />
      <img className="mb-[36px] mx-auto" src={Logo} alt="Site Logo" width={40} height={33} />
      <h1 className="font-bold text-[30px] mb-[36px]">Create an account</h1>
      <form onSubmit={handleRegisterSubmit} className="flex flex-col space-y-[25px] mb-10" autoComplete="off">
        <Input name="name" type="text" placeholder="Name" />
        <Input defaultValue="+9989" name="phone" type="tel" placeholder="Phone number" />
        <Input name="password" type="password" placeholder="Password" />
        {useEmail && <Input name="email" type="email" placeholder="Email" />}
        <div className="flex items-center justify-between my-[30px]">
          <p
            onClick={() => setUseEmail(!useEmail)}
            className="text-[#1DA1F2] cursor-pointer text-[18px]"
          >
            {useEmail ? "Hide email" : "Use email"}
          </p>
          <Link className="text-[#1DA1F2] text-[18px]" to="/">Log In</Link>
        </div>
        <Button isLoading={isLoading} loadingImg={Loading} title="Next" type="submit" />
      </form>
    </div>
  );
};

export default Register;
