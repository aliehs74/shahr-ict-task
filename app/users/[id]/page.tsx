"use client";

import { notFound, useParams } from "next/navigation";
import Loading from "@/components/atoms/Loading";
import { useGetUserByIdQuery } from "@/redux/api/apiSlice";
import { toast } from "react-toastify";
import { singleUserText } from "@/utils/text";
import UserSidebar from "@/components/organisms/UserSidebar";
import UserTab from "@/components/organisms/UserTab";

const Page = () => {
    const { id } = useParams();

    const { data: user, isLoading, isError } = useGetUserByIdQuery(Number(id))

    if (isError) {
        toast.error(singleUserText.errorGetUser);
    }

    if (user === null) {
        notFound()
    }

    return (
        isLoading ?
            <Loading />
            :
            user &&
            <div className="mx-auto p-4 bg-gray-50 min-h-screen">
                <div className="flex flex-col md:flex-row gap-6">
                    <UserSidebar user={user} />
                    <UserTab user={user} />
                </div>
            </div>
    );
}

export default Page;