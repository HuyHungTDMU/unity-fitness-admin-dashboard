import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  title: "Unity Fitness - Phòng Tập Gym Yoga Đẳng Cấp 5 ⭐️",
  description:
    "Unity Fitness - Gym & Yoga Phòng Tập Đẳng Cấp Chuẩn 5 Sao, phù hợp cho tất cả mọi người với chi phí ưu đãi và nhiều khuyến mãi hấp dẫn.",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Chart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
