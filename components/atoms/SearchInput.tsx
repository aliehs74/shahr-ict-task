import { EIconName } from "@/types/enum";
import IconMaker from "@/utils/IconMaker";

const SearchInput = ({ handleSearch, placeholder }: { handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string }) => (
  <div className="flex justify-start items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-2 w-full py-1">
    <IconMaker name={EIconName.SEARCH} props={{ className: "w-3 h-3 text-gray-400 dark:text-gray-600 mt-1" }} />
    <input
      type="text"
      onChange={handleSearch}
      className="outline-none"
      placeholder={placeholder}
    />
  </div>
);

export default SearchInput;