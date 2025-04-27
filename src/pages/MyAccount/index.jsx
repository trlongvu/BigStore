import React, { useContext, useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlineAutorenew } from 'react-icons/md';
import { MdVerifiedUser } from 'react-icons/md';
import { IoEyeOff } from 'react-icons/io5';
import { IoEye } from 'react-icons/io5';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AccountSidebar from '../../components/AccountSidebar';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { editData, postData } from '../../utils/api';
import { Collapse } from 'react-collapse';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const MyAccount = () => {
  const context = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [isChangePasswordFormShow, setIsChangePasswordFormShow] =
    useState(false);
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [formField, setFormField] = useState({
    username: '',
    email: '',
    phone: '',
  });
  const [changePassword, setChangePassword] = useState({
    email: '',
    oldPass: '',
    password: '',
    comfirmPass: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token === null) {
      navigate('/login');
    }
  }, [context.isLogin]);

  useEffect(() => {
    if (
      context.userData?._id !== null &&
      context.userData?._id !== undefined &&
      context.userData?._id !== ''
    ) {
      setUserId(context.userData?._id);
      setFormField({
        username: context.userData?.username,
        email: context.userData?.email,
        phone: context.userData?.phone,
      });
      let phoneNumber = context.userData?.phone || '';
      if (phoneNumber && !phoneNumber.startsWith('+84')) {
        phoneNumber = `+84${phoneNumber.replace(/^0/, '')}`;
      }
      setPhone(phoneNumber);
      setChangePassword((prev) => ({
        ...prev,
        email: context.userData?.email,
      }));
    }
  }, [context.userData]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword2 = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);
  const handleMouseDownPassword3 = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword3 = (event) => {
    event.preventDefault();
  };

  const onChangeInp = (e) => {
    const { name, value } = e.target;
    setFormField({
      ...formField,
      [name]: value,
    });

    setChangePassword({
      ...changePassword,
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
    if (formField.phone.trim() === '') {
      context.openAlertBox('error', 'Số điện thoại không được để trống');
      setIsLoading(false);
      return;
    }
    editData(`/api/users/${userId}}`, formField, {
      withCredentials: true,
    }).then((res) => {
      if (res.statusCode === 200) {
        setIsLoading(false);
        context.openAlertBox('success', res.message);
        context.setUserData(res.data);
        setFormField({
          username: '',
          email: '',
          phone: '',
        });
      } else {
        context.openAlertBox('error', res.message);
        setIsLoading(false);
      }
    });
  };

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    setIsLoading2(true);
    if (
      changePassword.oldPass.trim() === '' ||
      changePassword.oldPass.length < 8
    ) {
      context.openAlertBox('error', 'Mật khẩu không hợp lệ');
      setIsLoading2(false);
      return;
    }
    if (
      changePassword.password.trim() === '' ||
      changePassword.password.length < 8
    ) {
      context.openAlertBox('error', 'Mật khẩu tối thiểu 8 ký tự');
      setIsLoading2(false);
      return;
    }
    if (
      changePassword.comfirmPass.trim() === '' ||
      changePassword.comfirmPass.length < 8 ||
      changePassword.comfirmPass !== changePassword.password
    ) {
      context.openAlertBox('error', 'Mật khẩu không khớp');
      setIsLoading2(false);
      return;
    }
    postData(`/api/auth/reset-password`, changePassword).then((res) => {
      if (res.statusCode === 200) {
        setIsLoading2(false);
        context.openAlertBox('success', res.message);
        setChangePassword({
          email: '',
          oldPass: '',
          password: '',
          comfirmPass: '',
        });
      } else {
        context.openAlertBox('error', res.message);
        setIsLoading2(false);
      }
    });
  };

  return (
    <section className=" py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>
        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <div className=" flex items-center justify-between pb-0 mb-4">
              <h2 className=" pb-0 font-semibold">Thông tin tài khoản</h2>
              <Button
                className=" btn-org !capitalize !bg-gray-600 !text-xs hover:opacity-90 !transition"
                onClick={() =>
                  setIsChangePasswordFormShow(!isChangePasswordFormShow)
                }
              >
                Đổi mật khẩu
              </Button>
            </div>

            <hr />

            <form onSubmit={handleSubmit} className=" mt-5">
              <div className=" flex items-center gap-5 mb-5">
                <div className=" w-[50%]">
                  <TextField
                    label="Họ và tên"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                    onChange={onChangeInp}
                    value={formField.username}
                    name="username"
                    disabled={isLoading}
                  />
                </div>
                <div className=" w-[50%]">
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                    onChange={onChangeInp}
                    value={formField.email}
                    name="email"
                    type="email"
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className=" flex items-center gap-5 mb-5">
                <div className=" w-[50%]">
                  <TextField
                    label="1/1/2000"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                    disabled
                  />
                </div>

                <div className=" w-[50%]">
                  <PhoneInput
                    defaultCountry="vn"
                    value={phone}
                    disabled={isLoading}
                    onChange={(phone) => {
                      setPhone(phone),
                        setFormField({ ...formField, phone: phone });
                    }}
                  />
                </div>
              </div>
              <br />
              <div className=" flex items-center justify-center gap-5">
                <Button
                  className=" btn-org !capitalize"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    'Lưu thông tin'
                  )}
                </Button>
                <Button className=" btn-org !capitalize">Hủy</Button>
              </div>
            </form>
          </div>
          <Collapse isOpened={isChangePasswordFormShow}>
            <div className="card bg-white p-5 shadow-md rounded-md mt-8">
              <h2 className=" pb-3 font-semibold">Đổi mật khẩu</h2>
              <hr />
              <form
                onSubmit={handleSubmitChangePassword}
                className=" w-full mt-5"
              >
                <div className=" form-group w-full mb-5 flex items-center gap-3">
                  <RiLockPasswordFill className=" mt-4 text-2xl" />
                  <FormControl
                    sx={{ width: '25ch' }}
                    variant="standard"
                    className=" !w-full"
                  >
                    <InputLabel htmlFor="password">Mật khẩu cũ</InputLabel>
                    <Input
                      className=" !w-full"
                      id="oldPass"
                      type={showPassword3 ? 'text' : 'password'}
                      name="oldPass"
                      onChange={onChangeInp}
                      value={changePassword.oldPass}
                      disabled={isLoading2}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPassword3
                                ? 'Ẩn mật khẩu'
                                : 'Hiển thị mật khẩu'
                            }
                            onClick={handleClickShowPassword3}
                            onMouseDown={handleMouseDownPassword3}
                            onMouseUp={handleMouseUpPassword3}
                          >
                            {showPassword3 ? <IoEye /> : <IoEyeOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className=" form-group w-full mb-5 flex items-center gap-3">
                  <MdOutlineAutorenew className=" mt-4 text-2xl" />
                  <FormControl
                    sx={{ width: '25ch' }}
                    variant="standard"
                    className=" !w-full"
                  >
                    <InputLabel htmlFor="password">Mật khẩu mới</InputLabel>
                    <Input
                      className=" !w-full"
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      onChange={onChangeInp}
                      value={changePassword.password}
                      disabled={isLoading2}
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
                <div className=" form-group w-full mb-5 flex items-center gap-3">
                  <MdVerifiedUser className=" mt-4 text-2xl" />
                  <FormControl
                    sx={{ width: '25ch' }}
                    variant="standard"
                    className=" !w-full"
                  >
                    <InputLabel htmlFor="password">
                      Xác nhận mật khẩu
                    </InputLabel>
                    <Input
                      className=" !w-full"
                      id="comfirmPass"
                      type={showPassword2 ? 'text' : 'password'}
                      name="comfirmPass"
                      onChange={onChangeInp}
                      value={changePassword.comfirmPass}
                      disabled={isLoading2}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPassword2
                                ? 'Ẩn mật khẩu'
                                : 'Hiển thị mật khẩu'
                            }
                            onClick={handleClickShowPassword2}
                            onMouseDown={handleMouseDownPassword2}
                            onMouseUp={handleMouseUpPassword2}
                          >
                            {showPassword2 ? <IoEye /> : <IoEyeOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>

                <div className=" flex items-center justify-center w-full my-3">
                  <Button
                    disabled={isLoading2}
                    type="submit"
                    className={`${
                      isLoading ? 'opacity-70' : ''
                    } btn-org !px-12 !py-2 !normal-case`}
                  >
                    {isLoading2 ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      'Đặt lại mật khẩu'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Collapse>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
