import React, { useState } from 'react';
import OtpBox from '../../components/OtpBox';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const handleOptChange = (value) => {
    setOtp(value);
  };
  const verifyOtp = (e) => {
    e.preventDefault();
    navigate('/forget-password');
  };
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <div className=" text-center flex items-center justify-center">
            <img src="/verify2.png" width={80} />
          </div>
          <h3 className=" text-center font-semibold text-[16px] text-black uppercase my-2">
            Xác thực tài khoản
          </h3>
          <p className=" !text-center mb-5">
            Mã OTP đã được gửi về{' '}
            <span className=" text-primary font-medium">vu65617@gmail.com</span>
            .<br />
            Vui lòng kiểm tra hòm thư
          </p>

          <form onSubmit={verifyOtp}>
            <OtpBox length={6} onChange={handleOptChange} />

            <div className=" flex items-center justify-center mt-6">
              <Button type="submit" className=" btn-org !px-8 !normal-case">
                Xác nhận
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
