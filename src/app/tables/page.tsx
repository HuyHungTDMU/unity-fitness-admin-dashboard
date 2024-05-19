import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Unity Fitness - Phòng Tập Gym Yoga Đẳng Cấp 5 ⭐️",
  description:
    "Unity Fitness - Gym & Yoga Phòng Tập Đẳng Cấp Chuẩn 5 Sao, phù hợp cho tất cả mọi người với chi phí ưu đãi và nhiều khuyến mãi hấp dẫn.",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
