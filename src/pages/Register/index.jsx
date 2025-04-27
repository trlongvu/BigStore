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
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { postData } from '../../utils/api';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formField, setFormField] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onChangeInp = (e) => {
    const { name, value } = e.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formField.username.trim() === '') {
      context.openAlertBox('error', 'Tên người dùng không được để trống');
      setIsLoading(false);
      return;
    }
    if (formField.email.trim() === '') {
      context.openAlertBox('error', 'Email không được để trống');
      setIsLoading(false);
      return;
    }
    if (formField.password.trim() === '') {
      context.openAlertBox('error', 'Mật khẩu không được để trống');
      setIsLoading(false);
      return;
    }
    postData('/api/auth/register', formField).then((res) => {
      if (res.statusCode === 201) {
        setIsLoading(false);
        localStorage.setItem('emailUser', formField.email);
        setFormField({
          username: '',
          email: '',
          password: '',
        });
        navigate('/verify');
      } else {
        context.openAlertBox('error', res.message);
        setIsLoading(false);
      }
    });
  };

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
          <form onSubmit={handleSubmit} className=" w-full mt-5">
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <AiOutlineMail className=" mt-4 text-2xl" />
              <TextField
                id="email"
                name="email"
                label="Nhập email của bạn"
                variant="standard"
                className=" w-full"
                value={formField.email}
                disabled={isLoading}
                onChange={onChangeInp}
              />
            </div>
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <CiUser className=" mt-4 text-2xl" />
              <TextField
                id="username"
                name="username"
                label="Nhập tên của bạn"
                variant="standard"
                className=" w-full"
                value={formField.username}
                disabled={isLoading}
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
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formField.password}
                  disabled={isLoading}
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

            <FormControlLabel
              control={
                <Checkbox defaultChecked size="medium" className=" !ml-0.5" />
              }
              label="Tôi đồng ý với các điều khoản và chính sách bảo mật"
              required
            />
            <div className="flex items-center mt-1 mb-5 w-full">
              <Button
                disabled={isLoading}
                type="submit"
                className={`${isLoading ? 'opacity-70' : ''}  btn-org !w-full`}
              >
                {isLoading ? <CircularProgress color="inherit" /> : 'Đăng ký'}
              </Button>
            </div>
            <p className=" mb-5">
              Đã có tài khoản?
              <Link to="/login" className=" link font-medium">
                {' '}
                Đăng nhập
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

export default Register;
