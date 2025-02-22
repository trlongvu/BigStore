import React, { useContext, useState } from 'react';
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
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { MyContext } from '../../App';

const Login = () => {
  const context = useContext(MyContext);

  const [showPassword, setShowPassword] = useState(false);
  const [formField, setFormField] = useState({
    email: '22',
    password: '',
  });

  const history = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const forgetPassword = () => {
    if (formField.email !== '') {
      history('/verify');
      context.openAlertBox('success', 'Đã gửi mã về email của bạn');
    }
  };
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className=" font-semibold text-[16px] text-black uppercase mb-8">
            Đăng nhập
          </h3>
          <form className=" w-full mt-5">
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <AiOutlineMail className=" mt-4 text-2xl" />
              <TextField
                id="email"
                label="Nhập email của bạn"
                variant="standard"
                className=" w-full"
                name="name"
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
                  name="password"
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

            <div className=" w-full text-center">
              <a
                className=" link cursor-pointer text-sm font-semibold"
                onClick={forgetPassword}
              >
                Quên mật khẩu?
              </a>
            </div>
            <div className="flex items-center my-5 w-full">
              <Button className=" btn-org !w-full">Đăng nhập</Button>
            </div>
            <p className=" mb-5">
              Chưa có tài khoản?
              <Link to="/register" className=" link font-medium">
                {' '}
                Đăng ký
              </Link>
            </p>
            <div className="flex items-center justify-center w-full mb-5">
              <div className="flex-1 h-px bg-[rgba(0,0,0,0.4)]"></div>

              <span className="mx-4 text-sm font-medium uppercase">hoặc</span>

              <div className="flex-1 h-px bg-[rgba(0,0,0,0.4)]"></div>
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

export default Login;
