import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState({});
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuIndex((prev) => {
      const isClosing = prev[index];
      const newState = { ...prev, [index]: !isClosing };

      if (isClosing) {
        setInnerSubmenuIndex({});
      }

      return newState;
    });
  };

  const toggleInnerSubmenu = (index) => {
    setInnerSubmenuIndex((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Thời trang
              </Button>
            </Link>
            {submenuIndex[0] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(0)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(0)}
              />
            )}
            {submenuIndex[0] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Dành cho Nam
                    </Button>
                  </Link>
                  {innerSubmenuIndex[0] ? (
                    <FaMinus
                      className=" absolute top-[10px] right-[15px] link cursor-pointer"
                      onClick={() => toggleInnerSubmenu(0)}
                    />
                  ) : (
                    <FaPlus
                      className=" absolute top-[10px] right-[15px] link cursor-pointer"
                      onClick={() => toggleInnerSubmenu(0)}
                    />
                  )}
                  {innerSubmenuIndex[0] && (
                    <ul className=" inner_submenu w-full pl-3">
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Máy tính thông minh
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Áo thun bản giới hạn
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Đồng hồ thông minh
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Vòng tay thông minh
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Dành cho Nữ
                    </Button>
                  </Link>
                  {innerSubmenuIndex[1] ? (
                    <FaMinus
                      className=" absolute top-[10px] right-[15px] link cursor-pointer"
                      onClick={() => toggleInnerSubmenu(1)}
                    />
                  ) : (
                    <FaPlus
                      className=" absolute top-[10px] right-[15px] link cursor-pointer"
                      onClick={() => toggleInnerSubmenu(1)}
                    />
                  )}
                  {innerSubmenuIndex[1] && (
                    <ul className=" inner_submenu w-full pl-3">
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Áo thun Dior
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Jean Quảng Châu
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Khăn quàng cổ Hermes
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Vest bản giới hạn
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Thiết bị điện tử
              </Button>
            </Link>
            {submenuIndex[1] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(1)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(1)}
              />
            )}
            {submenuIndex[1] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Điện thoại di động
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Máy tính bảng
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Tai nghe bluetooth
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Laptop thông minh
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Túi sách
              </Button>
            </Link>
            {submenuIndex[2] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(2)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(2)}
              />
            )}
            {submenuIndex[2] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Thương Hiệu Dior
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Thương hiệu Hermes
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Thương hiệu Louis Vuitton
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Giày dép
              </Button>
            </Link>
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Đồ ăn
              </Button>
            </Link>
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Làm đẹp
              </Button>
            </Link>
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Sức khỏe
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
