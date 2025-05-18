"use client"

import { EIconName } from "@/types/enum"
import ColumnTemp from "../templates/ColumnTemp"
import { useGetUsersQuery } from "@/redux/api/apiSlice"
import { useEffect, useState } from "react"
import { UserItem } from "../molecules/UserItem"
import { homepageText } from "@/utils/text"
import { toast } from "react-toastify"
import Loading from "../atoms/Loading"
import { debounce } from 'lodash';
import { IUser } from "@/types/user"
import { useRouter } from "next/navigation"

const UsersColumn = () => {
    const { data, isLoading, isError, isSuccess } = useGetUsersQuery()
    const [filterData, setFilterData] = useState<IUser[]>();
    const router = useRouter();

    useEffect(() => {
        if (data && isSuccess && !isError) {
            setFilterData(data);
        }
        if (isError) {
            toast.error(homepageText.errorGetUsers);
        }
    }, [isSuccess, isError, data]);

    const handleSearch = debounce((searchParam: string) => {
        if (searchParam === '') {
            setFilterData(data);
        } else {
            setFilterData(data?.filter((user) =>
                user.name?.firstname?.toLowerCase().includes(searchParam.toLowerCase())
                || user.name?.lastname?.toLowerCase().includes(searchParam.toLowerCase())
                || user.email.toLowerCase().includes(searchParam.toLowerCase())
                || user.username.toLowerCase().includes(searchParam.toLowerCase())
                || user.phone?.toString().includes(searchParam.toLowerCase())
            ));
        }
    }, 300); //i use debounce because of the filter almost handle by api call in backend 

    return (
        <ColumnTemp title={EIconName.USERS} handleSearch={handleSearch}  >
            {isLoading
                ?
                <Loading />
                :
                filterData?.map((user) => <UserItem key={user.id} user={user} handleClick={() => router.push(`/users/${user.id}`)} />)
            }
        </ColumnTemp>
    )
}

export default UsersColumn