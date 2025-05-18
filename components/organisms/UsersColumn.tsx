import { EIconName } from "@/types/enum"
import ColumnTemp from "../templates/ColumnTemp"
import { useGetUsersQuery } from "@/redux/features/api/apiSlice"

const UsersColumn = () => {

    const { data, isLoading, isError } = useGetUsersQuery()

    const handleScroll = () => {
    }
    const handleSearch = () => {
    }
    const handleInfiniteScroll = () => {
    }
    const handleClick = () => router.push(`/users/${user.id}`);



    return (
        <ColumnTemp title={EIconName.USERS} handleSearch={handleSearch} handleScroll={handleScroll} handleInfiniteScroll={handleInfiniteScroll} >

            <></>

        </ColumnTemp>

    )
}

export default UsersColumn