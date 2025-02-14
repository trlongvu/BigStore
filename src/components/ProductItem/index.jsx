import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const ProductItem = () => {
  return (
    <div className="productItem rounded-md shadow-md border border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper w-[100%] h-[220px] rounded-md overflow-hidden">
        <img
          src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781297/1736781294242_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-0-202311201747.jpg"
          alt=""
          className=" w-full"
        />
      </div>
      <div className="info p-3">
        <Link to="/" className=" link transition-all">
          <h6 className=" text-[13px] uppercase">Rare Rabbit</h6>
        </Link>
        <h3 className=" text-sm title my-1 font-[500] text-black">
          <Link to="/" className=" link transition-all">
            Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        <div className=" flex items-center gap-4">
          <span className="oldPrice line-through text-sm text-gray-500">
            280.000đ
          </span>
          <span className="newPrice text-primary text-sm font-semibold">
            240.000đ
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
