"use client";

import React from "react";
import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSportsMode,
  FcSalesPerformance,
  FcComments,
  FcExport,
  FcAdvertising,
  FcBusinessman,
  FcPlanner,
} from "react-icons/fc";
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  music: FcMusic,
  photography: FcOldTimeCamera,
  fitness: FcSportsMode,
  "computer science": FcMultipleDevices,
  "project management": FcPlanner,
  engineering: FcEngineering,
  accounting: FcSalesPerformance,
  communication: FcComments,
  design: FcExport,
  marketing: FcAdvertising,
  leadership: FcBusinessman,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2 small-horizontal-scrollbar">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name.toLowerCase()]}
          value={item.id}
        />
      ))}
    </div>
  );
};
