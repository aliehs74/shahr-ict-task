import { IProduct } from "@/types/product";
import Image from "next/image";
import IconMaker from "../../utils/IconMaker";
import { EIconName } from "@/types/enum";

export const ProductItem = ({ product, handleClick }: { product: IProduct, handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {

    return (
        <div className="cursor-pointer p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:bg-gray-700" onClick={handleClick} >

            <Image
                className="w-full h-48 object-contain mb-4"
                width={50}
                height={50}
                src={product.image}
                alt={product.title}
            />

            <div className="flex flex-col">

                <h3 className="font-semibold truncate dark:text-white">
                    {product.title}
                </h3>

                <span className="inline-block mt-2 px-2 py-1 text-sm bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                    {product.category}
                </span>

                <div className="flex justify-between items-center mt-2">

                    <span className="text-gray-600 dark:text-gray-300">
                        ${product.price}
                    </span>

                    <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 dark:text-gray-300">
                            {product?.rating?.rate} ({product?.rating?.count})
                        </span>
                    </div>

                    <IconMaker name={EIconName.ADD} />
                </div>

            </div>
        </div>
    );
};