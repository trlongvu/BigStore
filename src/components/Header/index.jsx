import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdGitCompare } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa6';
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    background: 'red',
  },
}));
const Header = () => {
  const context = useContext(MyContext);
  return (
    <header className=" bg-white">
      <div className="top-strip py-2 border-b border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className=" text-[12px] font-[500]">
                Giảm đến 50% giá trị sản phẩm
              </p>
            </div>

            <div className=" col2 flex items-center justify-end">
              <ul className="flex items-center space-x-2">
                <li className=" list-none">
                  <Link
                    to="help-center"
                    className=" text-[12px] link font-[500] transition"
                  >
                    Hỗ trợ
                  </Link>
                </li>
                <li className=" opacity-40 cursor-none">|</li>
                <li className=" list-none">
                  <Link
                    to="order-tracking"
                    className=" text-[12px] link font-[500] transition"
                  >
                    Theo dõi đơn hàng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src="/logo.jpg" alt="" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center justify-around">
            <ul className="flex items-center space-x-4">
              <li className=" list-none">
                <Link
                  to="login"
                  className=" text-[12px] link font-[500] transition"
                >
                  Đăng nhập
                </Link>{' '}
                |
                <Link
                  to="register"
                  className=" text-[12px] link font-[500] transition"
                >
                  {' '}
                  Đăng ký
                </Link>
              </li>
              <li className=" list-none">
                <Tooltip title="So sánh">
                  <IconButton aria-label="cart" className="link transition">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoMdGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li className=" list-none">
                <Tooltip title="Yêu thích">
                  <IconButton aria-label="cart" className="link transition">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li className=" list-none">
                <Tooltip title="Giỏ hàng">
                  <IconButton
                    aria-label="cart"
                    className="link transition"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
