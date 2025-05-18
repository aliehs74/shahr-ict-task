import { MouseEvent, ReactNode } from "react";
import SearchInput from "../atoms/SearchInput";
import IconMaker from "../../utils/IconMaker";
import { EIconName } from "@/types/enum";

const ColumnTemp = ({ title, handleSearch, handleInfiniteScroll, children }: { title: EIconName, handleSearch: (value: string) => void, handleInfiniteScroll?: (event: MouseEvent<HTMLDivElement>) => void, children: ReactNode }) => (
    <div className="h-full flex flex-1 flex-col bg-white rounded-lg dark:bg-gray-800 ">

        <div className="flex items-center justify-start">
            <IconMaker name={title} />
            <h2 className=" text-xl font-bold ml-1 dark:text-white">{title}</h2>
        </div>

        <SearchInput
            handleSearch={(e) => handleSearch(e.target.value)}
            placeholder={`search ${title}...`}
        />
        <div className="divider" />

        <div onScroll={handleInfiniteScroll} className="flex-1 overflow-y-auto pr-2" >
            {children}
        </div>
    </div>
);

export default ColumnTemp