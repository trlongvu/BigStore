import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import QtyBox from '../../components/QtyBox';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdGitCompare } from 'react-icons/io';

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className=" py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Trang chủ
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Sản phẩm
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Chi tiết sản phẩm
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className=" bg-white py-5">
        <div className="container flex gap-4">
          <div className="productZoomContainer w-[40%] h-[70vh] overflow-hidden">
            <ProductZoom />
          </div>
          <div className="productContent w-[60%]">
            <h1 className=" text-[22px] font-semibold mb-3">
              Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
            </h1>
            <div className=" flex items-center gap-3">
              <span className=" text-gray-500 text-[13px]">
                Thương hiệu:{' '}
                <span className=" font-semibold text-black uppercase">
                  RARE RABBIT
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={3}
                size="small"
                readOnly
              />
              <span className="link text-[13px] text-gray-600 cursor-pointer">
                Bình luận: (7)
              </span>
            </div>
            <div className=" flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-sm text-gray-500">
                280.000đ
              </span>
              <span className="newPrice text-primary text-sm font-semibold">
                240.000đ
              </span>

              <span className=" text-sm">
                Sản phẩm có sẵn:{' '}
                <span className=" text-green-600 font-semibold">
                  144 sản phẩm
                </span>
              </span>
            </div>
            <p className=" mt-4 mb-5">
              Có nhiều biến thể của các đoạn văn bản Lorem Ipsum, nhưng phần lớn
              đã bị thay đổi ở một số dạng, bằng cách thêm yếu tố hài hước, hoặc
              các từ ngẫu nhiên trông không đáng tin chút nào. Nếu bạn định sử
              dụng một đoạn văn bản Lorem Ipsum, bạn cần đảm bảo rằng không có
              bất kỳ điều gì đáng xấu hổ ẩn ở giữa văn bản. Tất cả các trình tạo
              Lorem Ipsum trên Internet có xu hướng lặp lại các đoạn được xác
              định trước khi cần thiết, khiến đây trở thành trình tạo thực sự
              đầu tiên trên Internet.
            </p>
            <div className=" flex items-center gap-3">
              <span>Kích thước: </span>
              <div className=" flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? '!bg-[#ff5252] !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? '!bg-[#ff5252] !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? '!bg-[#ff5252] !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? '!bg-[#ff5252] !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
                <Button
                  className={`${
                    productActionIndex === 4 ? '!bg-[#ff5252] !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(4)}
                >
                  2XL
                </Button>
                <Button
                  className={`${
                    productActionIndex === 5 ? '!bg-[#ff5252] !text-white' : ''
                  }`}
                  onClick={() => setProductActionIndex(5)}
                >
                  Không giới hạn
                </Button>
              </div>
            </div>
            <p className=" text-sm mt-4">
              Miễn phí vận chuyển (Giao hàng chậm nhất vào 12-05-2025)
            </p>
            <div className=" flex items-center gap-3 mt-4 group">
              <div className="qtyBoxWrapper w-20">
                <QtyBox />
              </div>
              <Button className=" flex items-center !p-2 !text-sm gap-2 !border !border-[rgba(0,0,0,0.1)] btn-org ">
                <AiOutlineShoppingCart className=" text-lg" /> Thêm vào giỏ
              </Button>
            </div>
            <div className=" flex items-center gap-16 mt-4">
              <span className=" flex items-center gap-2 text-[16px] cursor-pointer link font-medium">
                <FaRegHeart className=" text-lg" />
                Yêu thích
              </span>

              <span className=" flex items-center gap-2 text-[16px] cursor-pointer link font-medium">
                <IoMdGitCompare className=" text-lg" />
                So sánh
              </span>
            </div>
          </div>
        </div>

        <div className="container pt-10">
          <div className=" flex items-center gap-8 mb-5">
            <span
              className={`link text-xl cursor-pointer font-medium ${
                activeTab === 0 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(0)}
            >
              Mô tả
            </span>

            <span
              className={`link text-xl cursor-pointer font-medium ${
                activeTab === 1 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(1)}
            >
              Thông tin chi tiết
            </span>

            <span
              className={`link text-xl cursor-pointer font-medium ${
                activeTab === 2 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(2)}
            >
              Bình luận (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className=" shadow-md w-full p-5 rounded-md">
              <p>
                Biểu tượng của sự nhẹ nhàng và tinh tế, chim ruồi gợi lên sự tò
                mò và niềm vui. Bộ sưu tập PolyFaune của Studio Design có các
                sản phẩm cổ điển với họa tiết nhiều màu sắc, lấy cảm hứng từ
                nghệ thuật gấp giấy origami truyền thống của Nhật Bản. Để mặc
                với quần chino hoặc quần jean. Quy trình in vải thăng hoa mang
                lại khả năng hiển thị màu sắc đặc biệt và màu sắc được đảm bảo
                theo thời gian.
              </p>
              <h4 className=" my-2.5 font-semibold">
                Đoạn văn Lorem Ipsum tiêu chuẩn, được sử dụng từ năm 1500
              </h4>

              <p>
                Biểu tượng của sự nhẹ nhàng và tinh tế, chim ruồi gợi lên sự tò
                mò và niềm vui. Bộ sưu tập PolyFaune của Studio Design có các
                sản phẩm cổ điển với họa tiết nhiều màu sắc, lấy cảm hứng từ
                nghệ thuật gấp giấy origami truyền thống của Nhật Bản. Để mặc
                với quần chino hoặc quần jean. Quy trình in vải thăng hoa mang
                lại khả năng hiển thị màu sắc đặc biệt và màu sắc được đảm bảo
                theo thời gian.
              </p>
              <h4 className=" my-2.5 font-semibold">
                Đoạn văn Lorem Ipsum tiêu chuẩn, được sử dụng từ năm 1500
              </h4>

              <p>
                Biểu tượng của sự nhẹ nhàng và tinh tế, chim ruồi gợi lên sự tò
                mò và niềm vui. Bộ sưu tập PolyFaune của Studio Design có các
                sản phẩm cổ điển với họa tiết nhiều màu sắc, lấy cảm hứng từ
                nghệ thuật gấp giấy origami truyền thống của Nhật Bản. Để mặc
                với quần chino hoặc quần jean. Quy trình in vải thăng hoa mang
                lại khả năng hiển thị màu sắc đặc biệt và màu sắc được đảm bảo
                theo thời gian.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Tên sản phẩm
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Thương hiệu
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Màu sắc
                    </th>

                    <th scope="col" class="px-6 py-3">
                      Giá bán
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Chất liệu
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Loại
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Style
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
                    </th>
                    <td class="px-6 py-4">RARE RABBIT</td>
                    <td class="px-6 py-4">Xanh</td>
                    <td class="px-6 py-4">240.000đ</td>
                    <td class="px-6 py-4">Jean</td>
                    <td class="px-6 py-4">Thời trang</td>
                    <td class="px-6 py-4">
                      Phong cách trẻ trung, phù hợp cho các buổi tiệc, gặp gỡ
                      bạn bè
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
