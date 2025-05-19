'use client';
import { IUser } from "@/types/user";
import { useState } from "react";
import TabButton from "../atoms/TabButton";
import { ETabType } from "@/types/enum";
import OverviewTab from "./OverviewTab";
import LocationTab from "./LocationTab";

const UserTab = ({ user }: { user: IUser }) => {
    const [activeTab, setActiveTab] = useState<ETabType>(ETabType.OVERVIEW);

    return (
        <div className="w-full min-h-[90vh] md:w-2/3 ">
            <div className="bg-white rounded-lg shadow h-full">

                <div className="flex border-b">
                    <TabButton isActive={activeTab === ETabType.OVERVIEW} handleClick={() => setActiveTab(ETabType.OVERVIEW)} title={ETabType.OVERVIEW} />
                    <TabButton isActive={activeTab === ETabType.LOCATION} handleClick={() => setActiveTab(ETabType.LOCATION)} title={ETabType.LOCATION} />
                </div>

                <div className="p-6">
                    {activeTab === ETabType.OVERVIEW
                        ?
                        <OverviewTab user={user} />
                        :
                        <LocationTab user={user} />
                    }
                </div>
            </div >
        </div >
    )
}

export default UserTab