import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Unity Fitness - Phòng Tập Gym Yoga Đẳng Cấp 5 ⭐️",
  description:
    "Unity Fitness - Gym & Yoga Phòng Tập Đẳng Cấp Chuẩn 5 Sao, phù hợp cho tất cả mọi người với chi phí ưu đãi và nhiều khuyến mãi hấp dẫn.",
};

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <FormElements />
    </DefaultLayout>
  );
};

export default FormElementsPage;
