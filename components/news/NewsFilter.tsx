"use client";

import { NewsCategory } from "@/data/news";

type FilterType = "ALL" | NewsCategory;

type Props = {
  selected: FilterType;
  onSelect: (category: FilterType) => void;
};

const filters: {
  label: string;
  value: FilterType;
}[] = [
  { label: "すべて", value: "ALL" },
  { label: "演奏会", value: "CONCERT" },
  { label: "YouTube", value: "YOUTUBE" },
  { label: "note", value: "NOTE" },
  { label: "メディア", value: "MEDIA" },
  { label: "SNS", value: "SNS" },
  { label: "その他", value: "その他" },
];

export default function NewsFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">

      {filters.map((filter) => (

        <button
          key={filter.value}
          type="button"
          onClick={() => onSelect(filter.value)}
          className={`
            rounded-full
            border
            w-20
            py-2
            text-sm
            transition
            cursor-pointer

            ${
              selected === filter.value
                ? "border-black bg-black text-white"
                : "border-neutral-300 text-neutral-600 hover:border-black hover:text-black"
            }
          `}
        >
          {filter.label}
        </button>

      ))}

    </div>
  );
}