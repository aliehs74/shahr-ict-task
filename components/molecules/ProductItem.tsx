import { IProduct } from "@/types/product";
import Image from "next/image";
import IconMaker from "../../utils/IconMaker";
import { EIconName } from "@/types/enum";

export const ProductItem = ({ product, handleClick }: { product: IProduct, handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {

    return (
        <div className="flex items-center justify-start gap-1 cursor-pointer p-1 mb-2 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:bg-gray-700" onClick={handleClick} >
            <Image
                className=" mb-4"
                width={40}
                height={20}
                style={{ width: "auto", height: "auto" }}
                src={product.image}
                alt={product.title}
            />

            <div className="flex flex-col w-5/6">

                <h3 className="font-bold text-xs truncate max-w-[90%] dark:text-white">
                    {product.title}
                </h3>

                <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-400 w-[90%]">
                    {product.category}
                </span>

                <div className="flex justify-between items-center mt-2 w-[95%]">

                    <span className="text-gray-600 dark:text-gray-400 text-xs">
                        ${product.price}
                    </span>

                    <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 dark:text-gray-400 text-xs">
                            {product?.rating?.rate} ({product?.rating?.count})
                        </span>
                    </div>

                    <IconMaker name={EIconName.ADD} />
                </div>

            </div>
        </div>
    );
};