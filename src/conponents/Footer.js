import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#a0181a] w-full  pl-14 py-5">
        <div className="flex border-b mx-4 pb-2">
          <div className="w-[100px] pl-4">
            <img src="/logo.jpg" alt="" />
          </div>
          <div className="flex flex-col text-white font-semibold pl-3">
            <span>Trường Đại học Hà Nội</span>
            <span>Trung tâm khảo thí</span>
            <span>
              Địa chỉ: Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
            <span>Email: Lorem ipsum dolor sit.</span>
          </div>
        </div>
        <span className="text-white">
          Lorem ipsum dolor sit At, facere expedita.
        </span>
      </div>
    </div>
  );
};

export default Footer;
