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
import { Button, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { MyContext } from '../../App';
import { postData } from '../../utils/api';

const Login = () => {
  const context = useContext(MyContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formField, setFormField] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onChangeInp = (e) => {
    const { name, value } = e.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const forgetPassword = (e) => {
    e.preventDefault();
    setIsLoading2(true);
    if (formField.email.trim() !== '') {
      localStorage.setItem('emailUser', formField.email);
      localStorage.setItem('actionType', 'forget-password');
      postData('/api/auth/forget-password', {
        email: formField.email,
      }).then((res) => {
        console.log(res);
        if (res.success) {
          setIsLoading2(false);
          context.openAlertBox('success', res.message);
          navigate('/verify');
        } else {
          context.openAlertBox('error', res.message);
          setIsLoading2(false);
        }
      });
    } else {
      context.openAlertBox('error', 'Vui nhập nhập email để lấy lại mật khẩu');
      setIsLoading2(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formField.email.trim() === '') {
      context.openAlertBox('error', 'Email dùng không được để trống');
      setIsLoading(false);
      return;
    }
    if (formField.password.trim() === '') {
      context.openAlertBox('error', 'Mật khẩu dùng không được để trống');
      setIsLoading(false);
      return;
    }
    postData('/api/auth/login', formField, { withCredentials: true }).then(
      (res) => {
        console.log(res);
        if (res.success) {
          setIsLoading(false);
          localStorage.setItem('accessToken', res.accesstoken);
          localStorage.setItem('refreshToken', res.refreshtoken);
          context.setIsLogin(true);
          setFormField({
            email: '',
            password: '',
          });
          navigate('/');
        } else {
          context.openAlertBox('error', res.message);
          setIsLoading(false);
          if (res.statusCode === 403) {
            localStorage.setItem('emailUser', formField.email);
            navigate('/verify');
          }
        }
      },
    );
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className=" font-semibold text-[16px] text-black uppercase mb-8">
            Đăng nhập
          </h3>
          <form onSubmit={handleSubmit} className=" w-full mt-5">
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <AiOutlineMail className=" mt-4 text-2xl" />
              <TextField
                id="email"
                label="Nhập email của bạn"
                variant="standard"
                className=" w-full"
                name="email"
                value={formField.email}
                onChange={onChangeInp}
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
                  value={formField.password}
                  onChange={onChangeInp}
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
                {isLoading2 ? (
                  <CircularProgress color="inherit" />
                ) : (
                  'Quên mật khẩu'
                )}
              </a>
            </div>
            <div className="flex items-center my-5 w-full">
              <Button
                disabled={isLoading}
                type="submit"
                className={`${isLoading ? 'opacity-70' : ''} btn-org !w-full`}
              >
                {isLoading ? <CircularProgress color="inherit" /> : 'Đăng nhập'}
              </Button>
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
