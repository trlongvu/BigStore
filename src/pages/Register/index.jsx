import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { IoEyeOff } from 'react-icons/io5';
import { IoEye } from 'react-icons/io5';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className=" font-semibold text-[16px] text-black uppercase mb-8">
            Đăng ký tài khoản
          </h3>
          <form className=" w-full mt-5">
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <AiOutlineMail className=" mt-4 text-2xl" />
              <TextField
                id="email"
                label="Nhập email của bạn"
                variant="standard"
                className=" w-full"
              />
            </div>
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <CiUser className=" mt-4 text-2xl" />
              <TextField
                id="username"
                label="Nhập tên của bạn"
                variant="standard"
                className=" w-full"
              />
            </div>
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <BsKey className=" mt-4 text-2xl" />
              <FormControl
                sx={{ width: '25ch' }}
                variant="standard"
                className=" !w-full"
              >
                <InputLabel htmlFor="password">Mật khẩu</InputLabel>
                <Input
                  className=" !w-full"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {showPassword ? <IoEye /> : <IoEyeOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <FormControlLabel
              control={
                <Checkbox defaultChecked size="medium" className=" !ml-0.5" />
              }
              label="Tôi đồng ý với các điều khoản và chính sách bảo mật"
              required
            />
            <div className="flex items-center mt-1 mb-5 w-full">
              <Button className=" btn-org !w-full">Đăng ký</Button>
            </div>
            <p className=" mb-5">
              Đã có tài khoản?
              <Link to="/login" className=" link font-medium">
                {' '}
                Đăng nhập
              </Link>
            </p>
            <div class="flex items-center justify-center w-full mb-5">
              <div class="flex-1 h-px bg-[rgba(0,0,0,0.4)]"></div>

              <span class="mx-4 text-sm font-medium uppercase">hoặc</span>

              <div class="flex-1 h-px bg-[rgba(0,0,0,0.4)]"></div>
            </div>
            <div className=" flex items-center gap-5 justify-between mx-12 mb-5">
              <Button className=" !w-[50%] gap-5 !text-sm !border !border-[rgba(0,0,0,0.4)] !text-black">
                <FcGoogle className=" text-lg" /> Google
              </Button>
              <Button className="  !w-[50%] gap-5 !text-sm !border !border-[rgba(0,0,0,0.4)] !text-black">
                <FaFacebookSquare className=" text-blue-700 text-lg" /> Facebook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
