import React from 'react';
import { WiTime9 } from 'react-icons/wi';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

const BlogItem = () => {
  return (
    <div className="blogItem my-10 ">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative group">
        <img
          src="https://images.unsplash.com/photo-1749456289357-4e5cbffe9fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt="blog image"
          className=" w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />
        <span className=" absolute bottom-4 right-4 flex items-center justify-center text-white bg-primary gap-1 rounded-md p-1 text-xs font-medium">
          <WiTime9 className=" text-lg" /> 2025-02-15
        </span>
      </div>
      <div className="info py-4">
        <h2 className=" text-[16px] font-semibold text-black">
          <Link to="/" className="link">
            Achieve excellence through customized
          </Link>
        </h2>
        <p className="text-sm font-normal text-[rbga(0,0,0,0.8)] mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
        <Link
          to="/"
          className="link flex items-center gap-1 underline font-semibold uppercase text-lg  w-fit"
        >
          Read More <FaChevronRight className=" text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
