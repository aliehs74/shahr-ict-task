import { MouseEvent, ReactNode } from "react";
import SearchInput from "../atoms/SearchInput";
import IconMaker from "../../utils/IconMaker";
import { EIconName } from "@/types/enum";

interface IColumnTempProps {
    title: EIconName;
    handleSearch: (value: string) => void;
    handleInfiniteScroll?: (e: MouseEvent<HTMLDivElement>) => void;
    children: ReactNode;
}

const ColumnTemp = ({ title, handleSearch, handleInfiniteScroll, children }: IColumnTempProps) => {

    return (
        <div className="flex flex-1 flex-col bg-white rounded-lg dark:bg-gray-800 p-4">
            <div className="flex items-center justify-start mb-2  ">
                <IconMaker name={title} props={{ className: "w-5 h-5 dark:text-white mt-1" }} />
            <h2 className=" text-xl font-bold ml-1 dark:text-white text-center">{title}</h2>
            </div>

            <div className="flex items-center justify-center px-1.5 ">
                <SearchInput placeholder={`search ${title}...`} handleSearch={(e) => handleSearch(e.target.value.toString())} />
            </div>

            <div className=" border-b-1 border-gray-300 dark:border-gray-600 w-full  mx-auto mt-2 mb-3 -m-4 " />

            <div className="max-h-[70vh] flex-1 overflow-y-scroll overflow-x-hidden  pr-2" onScroll={handleInfiniteScroll} >
                {children}
            </div>
        </div>
    );
}

export default ColumnTemp