import React from 'react';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { IoLogOut } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AccountSidebar = () => {
  return (
    <div className="card shadow-md bg-white rounded-md sticky top-2.5">
      <div className=" w-full p-3 flex items-center justify-center flex-col">
        <div className=" size-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzFagc0G6d1opo0x0DIPZtWE087ymFeUehA&s"
            alt="avatar"
            className=" size-full"
          />
          <div className=" overlay size-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100 duration-500">
            <FaCloudUploadAlt className=" text-white text-xl" />
            <input
              type="file"
              className=" absolute top-0 left-0 size-full opacity-0"
            />
          </div>
        </div>
        <h3>Sơn Tùng MTP</h3>
      </div>
      <ul className=" list-none pb-2 myAccountTabs">
        <li className=" w-full group">
          <NavLink to="/my-account" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-2 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <FaUser />
              Thông tin
            </Button>
          </NavLink>
        </li>
        <li className=" w-full group">
          <NavLink to="/order" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-2 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <FaShoppingCart />
              Đơn hàng
            </Button>
          </NavLink>
        </li>
        <li className=" w-full group">
          <NavLink to="/love" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-2 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <FaHeart />
              Yêu thích
            </Button>
          </NavLink>
        </li>
        <li className=" w-full group">
          <NavLink to="/logout" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-1 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <IoLogOut className=" text-xl" />
              Đăng xuất
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
