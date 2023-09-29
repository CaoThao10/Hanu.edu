import React from "react";
import { NavLink } from "react-router-dom";

const Hearder = ({ img }) => {
  return (
    <div>
      <div className="h-[63px] flex items-center justify-between mx-2 px-[120px]">
        <div className="h-full flex items-center">
          <div className="h-[80%]">
            <img src="/logo.jpg" alt="" className="h-full" />
          </div>
          <div className="flex flex-col mx-2">
            <span className="text-[#a0181a]">Trường Đại học Hà Nội</span>
            <span className="text-[#a0181a] font-medium">
              TRUNG TÂM KHẢO THÍ
            </span>
          </div>
        </div>
        <div className="h-full flex items-center">
          <div className="flex items-center">
            <div className=" px-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M112.65 0.830078H7.36008C3.75366 0.830078 0.830078 3.75366 0.830078 7.36008V112.65C0.830078 116.257 3.75366 119.18 7.36008 119.18H112.65C116.257 119.18 119.18 116.257 119.18 112.65V7.36008C119.18 3.75366 116.257 0.830078 112.65 0.830078Z"
                  fill="#a0181a"
                />
                <path
                  d="M82.4801 119.17V73.34H97.8601L100.16 55.48H82.4801V44.08C82.4801 38.91 83.9201 35.38 91.3301 35.38H100.79V19.38C96.2093 18.9026 91.6057 18.6756 87.0001 18.7C73.3801 18.7 64.0001 27 64.0001 42.31V55.48H48.6201V73.34H64.0001V119.17H82.4801Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" pr-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="#a0181a"
                />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-[#a0181a] text-lg">HOTLINE: 1235465468</span>
          </div>
          <svg
            className=" px-3"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
              fill="#a0181a"
            />
          </svg>
          <a href="/" className="text-[#a0181a] text-lg">
            Đăng nhập
          </a>
          <img className="h-[50%] px-3" src="/flag.png" alt="" />
          <img className="h-[50%] w-[11%]" src="/flag2.png" alt="" />
        </div>
      </div>
      <div className="h-[40px] bg-[#a0181a] pl-[100px] pr-[60px] flex items-center justify-between text-white">
        {/* <div className="flex items-center justify-around"> */}
        <NavLink
          to="/"
          className="hover:bg-white leading-10 hover:text-[#a0181a] px-2 font-medium"
        >
          TRANG CHỦ
        </NavLink>
        <NavLink
          to="/Introduce"
          className="hover:bg-white leading-10 hover:text-[#a0181a] px-2 font-medium"
        >
          GIỚI THIỆU
        </NavLink>
        <NavLink
          to="/Exam"
          className="hover:bg-white leading-10 hover:text-[#a0181a] px-2 font-medium"
        >
          HOẠT ĐỘNG KHẢO THÍ
        </NavLink>
        <NavLink
          to="/Result"
          className="hover:bg-white leading-10 hover:text-[#a0181a] px-2 font-medium"
        >
          KẾT QUẢ THI
        </NavLink>
        <NavLink
          to="/Contact"
          className="hover:bg-white leading-10 hover:text-[#a0181a] px-2 font-medium"
        >
          LIÊN HỆ
        </NavLink>
        {/* </div> */}
        <div className=" bg-white flex rounded-2xl text-black">
          <input
            type="text"
            placeholder="Tìm kiếm"
            name=""
            id=""
            className="mx-2 rounded-2xl px-2 outline-none"
          />
          <svg
            className="hover:cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="#a0181a"
            />
          </svg>
        </div>
      </div>
      <div className="w-full">
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default Hearder;
