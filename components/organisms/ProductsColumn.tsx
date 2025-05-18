"use client"

import { EIconName } from "@/types/enum"
import ColumnTemp from "../templates/ColumnTemp"
import { useGetProductsQuery } from "@/redux/features/api/apiSlice"
import { MouseEvent, useEffect, useState } from "react"
import { ProductItem } from "../molecules/ProductItem"
import { useDispatch } from "react-redux"
import { toggleProduct } from "@/redux/features/selectedProductsSlice"
import { homepageText } from "@/utils/text"
import { toast } from "react-toastify"
import Loading from "../atoms/Loading"

const ProductsColumn = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, isError } = useGetProductsQuery(page * 10)
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError)
            toast.error(homepageText.errorGetProducts);
    }, [isError])


    const handleSearch = () => {
    }

    const handleInfiniteScroll = (e: MouseEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

        if (scrollHeight - scrollTop - clientHeight < 200) { //less than 200px from bottom
            setPage(page + 1);
        }
    };

    return (
        <ColumnTemp title={EIconName.PRODUCTS} handleSearch={handleSearch} handleInfiniteScroll={handleInfiniteScroll} >
            {isLoading
                ?
                <Loading />
                :
                data?.map((product) => <ProductItem key={product.id} product={product} handleClick={() => dispatch(toggleProduct(product))} />)
            }
        </ColumnTemp>
    )
}

export default ProductsColumn