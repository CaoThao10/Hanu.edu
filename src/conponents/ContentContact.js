import React from "react";

const ContentContact = () => {
  return (
    <div>
      <div className="flex items-center mx-[170px] my-2">
        <svg
          width="9"
          height="16"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
            fill="#a0181a"
          />
        </svg>
        <div className="mx-2">
          <span className="text-[#a0181a] font-semibold text-xl border-b-[1px] border-[#a0181a]">
            Liên hệ
          </span>
          {/* <h3 className="border-b-[1px] border-[#a0181a] w-[85px]"></h3> */}
        </div>
      </div>
      <div>
        <span className="mx-[170px] font-bold text-xl text-[#a0181a]">
          Thông tin liên hệ
        </span>
        <h3 className="border-b-[1px] border-[#a0181a] border-dotted pb-5"></h3>
      </div>
      <div className="mx-[290px]">
        <div className="my-3">
          <h2 className="font-bold text-[#a0181a] text-lg">
            TRUNG TÂM KHẢO THÍ
          </h2>
          <div className="flex items-center ">
            <h3 className="text-base leading-relaxed my-1 font-semibold pr-2">
              Địa chỉ:
            </h3>
            <h3 className="text-base leading-relaxed my-1">
              P101, nhà A1, Trường Đại học Hà Nội, Km 9, đường Nguyễn Trãi, quận
              Nam Từ Liêm, Hà Nội, Việt Nam.
            </h3>
          </div>
          <div className="flex items-center ">
            <h3 className="text-base leading-relaxed my-1 font-semibold pr-2">
              Email:
            </h3>
            <h3 className="text-base leading-relaxed my-1">
              ahfkajf@gmail.com
            </h3>
          </div>
          <div className="flex items-center ">
            <h3 className="text-base leading-relaxed my-1 font-semibold pr-2">
              Điện thoại:
            </h3>
            <h3 className="text-base leading-relaxed my-1">
              (0243)854.4338 máy lẻ 1187, 1188, 1189, 1190
            </h3>
          </div>
          <div className="flex items-center ">
            <h3 className="text-base leading-relaxed my-1 font-semibold pr-2">
              Hotline:
            </h3>
            <h3 className="text-base leading-relaxed my-1"> 0941.23.30.03</h3>
          </div>
        </div>
        <div className="my-3">
          <h2 className="font-bold text-[#a0181a] text-lg">
            BỘ PHẬN CẤP CHỨNG CHỈ
          </h2>
          <div className="flex items-center ">
            <h3 className="text-base leading-relaxed my-1 font-semibold pr-2">
              Địa chỉ:
            </h3>
            <h3 className="text-base leading-relaxed my-1">
              P101, nhà A1, Trường Đại học Hà Nội, Km 9, đường Nguyễn Trãi, quận
              Nam Từ Liêm, Hà Nội, Việt Nam.
            </h3>
          </div>
          <div className="flex items-center ">
            <h3 className="text-base leading-relaxed my-1 font-semibold pr-2">
              Email:
            </h3>
            <h3 className="text-base leading-relaxed my-1">
              ahfkajf@gmail.com
            </h3>
          </div>
          <div className="flex items-center ">
            <h3 className="text-base leading-relaxed my-1 font-semibold pr-2">
              Điện thoại:
            </h3>
            <h3 className="text-base leading-relaxed my-1">
              (0243)854.4338 máy lẻ 1187, 1188, 1189, 1190
            </h3>
          </div>
          <div className="flex items-center ">
            <h3 className="text-base leading-relaxed my-1 font-semibold pr-2">
              Hotline:
            </h3>
            <h3 className="text-base leading-relaxed my-1"> 0941.23.30.03</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContact;
