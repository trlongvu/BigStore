import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { TbTruckDelivery } from 'react-icons/tb';
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className=" pt-12 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className=" text-xl font-bold">Sản phẩm phổ biến</h3>
              <p className=" text-sm font-medium">
                Đừng bỏ lỡ các ưu đãi trong thời điểm hiện tại
              </p>
            </div>
            <div className="rightSec w-[65%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Thời trang" />
                <Tab label="Thiết bị điện tử" />
                <Tab label="Túi sách" />
                <Tab label="Giày dép" />
                <Tab label="Đồ ăn" />
                <Tab label="Làm đẹp" />
                <Tab label="Sức khỏe" />
                <Tab label="Trang sức" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>
      <section className=" py-12 bg-white">
        <div className="container">
          <div className="freeShipping w-[90%] m-auto p-4 border border-[#ff5252] flex items-center justify-between rounded-md">
            <div className=" col1 flex items-center">
              <TbTruckDelivery className=" text-[40px] mr-2" />
              <div className=" font-bold uppercase">Miễn phí vận chuyển</div>
            </div>
            <div className=" col2 flex items-center">
              <div className="font-[500]">
                Miễn phí vận chuyển cho đơn hàng trên 500.000đ
              </div>
            </div>
            <p className=" text-[25px] font-bold text-[#ff5252]">MUA NGAY*</p>
          </div>

          <AdsBannerSlider items={5} />
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Home;
