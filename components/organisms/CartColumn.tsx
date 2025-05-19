"use client"

import { EIconName } from "@/types/enum"
import ColumnTemp from "../templates/ColumnTemp"
import { useEffect, useState } from "react"
import { ProductItem } from "../molecules/ProductItem"
import { useDispatch, useSelector } from "react-redux"
import { toggleProduct } from "@/redux/features/selectedProductsSlice"
import { debounce } from 'lodash';
import { RootState } from "@/redux/store"

const CartColumn = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.selectedProducts.data)

    useEffect(() => {
        setFilterData(data);
    }, [data])

    const [filterData, setFilterData] = useState(data);

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
    }, 300);

    return (
        <ColumnTemp title={EIconName.SELECTED_PRODUCTS} handleSearch={handleSearch} >
            {filterData?.map((product) => <ProductItem key={product.id} product={product} handleClick={() => dispatch(toggleProduct(product))} />)}
        </ColumnTemp>
    )
}

export default CartColumn