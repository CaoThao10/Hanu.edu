import React from "react";

const ContentIntroduce = () => {
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
            Giới thiệu
          </span>
          {/* <h3 className="border-b-[1px] border-[#a0181a] w-[85px]"></h3> */}
        </div>
      </div>
      <div>
        <span className="mx-[170px] font-bold text-xl text-[#a0181a]">
          GIỚI THIỆU CHUNG
        </span>
        <h3 className="border-b-[1px] border-[#a0181a] border-dotted pb-5"></h3>
      </div>
      <div className="mx-[290px]">
        <div className="my-3">
          <h2 className="font-bold">LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN</h2>
          <h3 className="text-base leading-relaxed my-1">
            Trung tâm Khảo thí Trường Đại học Hà Nội tiền thân là Trung tâm Khảo
            thí và Kiểm định chất lượng được thành lập theo Quyết định số
            1127/QĐ-ĐHHN ngày 16/8/2009 của Hiệu trưởng Trường Đại học Hà Nội.
          </h3>
          <h3 className="text-base leading-relaxed my-1">
            Ngày 21 tháng 3 năm 2018, Trung tâm đổi tên thành Trung tâm Khảo thí
            theo Quyết định số 557/QĐ-ĐHHN của Hiệu trưởng Trường Đại học Hà
            Nội.
          </h3>
        </div>
        <div className="my-3">
          <h2 className="font-bold">CHỨC NĂNG NHIỆM VỤ</h2>
          {/* <ul> */}
          <li className="text-base font-bold leading-relaxed my-1">
            Chức năng:
          </li>
          <div className="flex flex-col">
            <span className="my-1">
              - Tham mưu, giúp việc cho Hiệu trưởng trong việc quản lý và triển
              khai thực hiện công tác khảo thí trong toàn trường;
            </span>
            <span className="my-1">
              - Cung cấp dịch vụ về khảo thí cho các tổ chức, cá nhân có nhu
              cầu;
            </span>
            <span className="my-1">
              - Tổ chức đào tạo, bồi dưỡng chuyên gia về khảo thí.
            </span>
          </div>
          <li className="text-base leading-relaxed my-1 font-bold">
            Nhiệm vụ, quyền hạn:
          </li>
          <div className="flex flex-col">
            <span className="my-1">
              1. Chủ trì xây dựng và ban hành các văn bản pháp quy về khảo thí;
              theo dõi và kiểm tra việc thực hiện các văn bản sau khi ban hành.
            </span>
            <span className="my-1">
              2. Biên soạn hướng dẫn, theo dõi việc thực hiện quy trình kiểm
              tra, thi kết thúc học phần tại các đơn vị đào tạo trong toàn
              trường.
            </span>
            <span className="my-1">
              3. Chủ trì hoặc phối hợp các Khoa/Bộ môn và các phòng chức năng
              khác trong công tác tổ chức thi kết thúc học phần theo kế hoạch và
              chương trình đào tạo đã được Ban Giám hiệu phê duyệt.
            </span>
            <span className="my-1">
              4. Chủ trì, phối hợp các Khoa/Bộ môn và các phòng chức năng trong
              công tác khảo thí cấp Trường (bao gồm: đánh giá năng lực ngoại ngữ
              cho sinh viên hệ chính quy, tuyển sinh các hệ đào tạo, các chương
              trình đào tạo ngắn hạn, các chương trình liên kết…)
            </span>
            <span className="my-1">
              5. Soạn thảo và trình Hiệu trưởng phê duyệt hướng dẫn xây dựng và
              quản lý ngân hàng đề thi kết thúc học phần cho các chương trình
              đào tạo của Nhà trường.
            </span>
            <span className="my-1">
              6. Chủ trì việc xây dựng và quản lý ngân hàng câu hỏi, đề thi năng
              lực ngoại ngữ của Nhà trường.
            </span>
            <span className="my-1">
              7. Chủ trì việc xây dựng và quản lý ngân hàng câu hỏi, đề thi năng
              lực tin học phục vụ hoạt động luyện thi và cấp chứng chỉ ứng dụng
              công nghệ thông tin.
            </span>
            <span className="my-1">
              8. Tổ chức nghiên cứu và đề xuất giải pháp cải tiến phương pháp,
              nội dung kiểm tra, đánh giá kết quả học tập phù hợp với yêu cầu
              đào tạo của từng ngành, từng hệ và bậc đào tạo nhằm nâng cao chất
              lượng giáo dục.
            </span>
            <span className="my-1">
              9. Chủ trì, phối hợp các đơn vị chức năng tổ chức thi và cấp chứng
              chỉ năng lực ngoại ngữ, tin học và tất cả các hoạt động dịch vụ
              khảo thí khác cho các tổ chức, đơn vị và cá nhân theo yêu cầu.
            </span>
            <span className="my-1">
              10. Thực hiện chế độ báo cáo số liệu về hoạt động thi kết thúc học
              phần, thi đánh giá năng lực ngoại ngữ, ứng dụng công nghệ thông
              tin và các hoạt động dịch vụ khảo thí khác theo định kỳ hoặc theo
              chỉ đạo.
            </span>
          </div>
          {/* </ul> */}
        </div>
        <div className="my-3">
          <h2 className="font-bold">HOẠT ĐỘNG KHẢO THÍ </h2>
          <h3 className="text-base leading-relaxed my-1">
            Hiện nay, Trung tâm Khảo thí đang triển khai các hoạt động khảo thí
            cụ thể như sau:
          </h3>
          <h3 className="text-base leading-relaxed my-1">
            1. Tổ chức thi và cấp chứng chỉ năng lực ngoại ngữ theo Khung tham
            chiếu châu Âu và Khung năng lực 6 bậc dùng cho Việt Nam.
          </h3>
          <h3 className="text-base leading-relaxed my-1">
            2. Tổ chức thi và cấp chứng chỉ Năng lực ngoại ngữ chuẩn đầu ra cho
            sinh viên hệ chính quy của Trường.
          </h3>
          <h3 className="text-base leading-relaxed my-1">
            3. Tổ chức thi kết thúc học phần cho Khoa Giáo dục chính trị và Bộ
            môn Ngữ văn Việt Nam thuộc Trường Đại học Hà Nội.
          </h3>
          <h3 className="text-base leading-relaxed my-1">
            4. Phối hợp tổ chức kỳ thi thăng hạng chức danh nghề nghiệp.
          </h3>
          <h3 className="text-base leading-relaxed my-1">
            5. Các hoạt động Khảo thí khác theo chỉ đạo của Trường.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContentIntroduce;
