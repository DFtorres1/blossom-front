import { HiOutlineAdjustments } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import FilterDialog from "./FilterDialog";
import { useState } from "react";

type SearchBarProps = {
  onFilter: (filters: any) => void;
};

const SearchBar = ({ onFilter }: SearchBarProps) => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  const handleChangeFilterDialog = () => {
    setIsFilterDialogOpen((prev) => !prev);
  };

  return (
    <search className="pt-11 relative">
      <span className="px-6 pb-2 text-primary font-normal text-2xl">
        Rick and Morty list
      </span>
      <div className="mx-5 mt-4 py-2 px-3 h-[52px] flex flex-[1_0_0] betwe items-center gap-2 rounded-lg bg-coolGray-100 text-secondary">
        <IoSearch className="w-5 h-5" />
        <input
          className="bg-transparent text-sm font-medium w-full"
          placeholder="Search or filter results"
        />
        <HiOutlineAdjustments
          className="w-5 h-5 cursor-pointer"
          onClick={handleChangeFilterDialog}
        />

        <FilterDialog
          isOpen={isFilterDialogOpen}
          onClose={handleChangeFilterDialog}
          onApplyFilters={onFilter}
        />
      </div>
    </search>
  );
};

export default SearchBar;
