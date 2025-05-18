"use client"

import { EIconName } from "@/types/enum"
import ColumnTemp from "../templates/ColumnTemp"
import { useGetProductsQuery } from "@/redux/api/apiSlice"
import { MouseEvent, useEffect, useState } from "react"
import { ProductItem } from "../molecules/ProductItem"
import { useDispatch } from "react-redux"
import { toggleProduct } from "@/redux/features/selectedProductsSlice"
import { homepageText } from "@/utils/text"
import { toast } from "react-toastify"
import Loading from "../atoms/Loading"
import { debounce } from 'lodash';
import { IProduct } from "@/types/product"

const ProductsColumn = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, isError, isSuccess } = useGetProductsQuery(page * 10)
    const [filterData, setFilterData] = useState<IProduct[]>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (data && isSuccess && !isError) {
            setFilterData(data);
        }
        if (isError) {
            toast.error(homepageText.errorGetProducts);
        }
    }, [isSuccess, isError, data]);

    const handleSearch = debounce((searchParam: string) => {
        if (searchParam === '') {
            setFilterData(data);
        } else {
            setFilterData(data?.filter((product) =>
                product.title.toLowerCase().includes(searchParam.toLowerCase())
                || product.category.toLowerCase().includes(searchParam.toLowerCase())
                || product.description.toLowerCase().includes(searchParam.toLowerCase())
                || product.price.toString().includes(searchParam.toLowerCase())
            ));
        }
    }, 300); //i use debounce because of the filter almost handle by api call in backend 


    const handleInfiniteScroll = (e: MouseEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        const isFinishedScroll = scrollHeight - scrollTop - clientHeight < 200  //less than 200px from bottom
        const isRemainData = data && data.length >= page * 10  //data isnt completly feched

        if (isFinishedScroll && isRemainData) {
            setPage(page + 1)
        }
    };

    return (
        <ColumnTemp title={EIconName.PRODUCTS} handleSearch={handleSearch} handleInfiniteScroll={handleInfiniteScroll} >
            {isLoading
                ?
                <Loading />
                :
                filterData?.map((product) => <ProductItem key={product.id} product={product} handleClick={() => dispatch(toggleProduct(product))} />)
            }
        </ColumnTemp>
    )
}

export default ProductsColumn