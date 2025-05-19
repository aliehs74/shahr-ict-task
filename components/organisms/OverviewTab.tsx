import { IUser } from '@/types/user'
import { singleUserText } from '@/utils/text'
import React from 'react'
import OverviewItem from '../molecules/OverviewItem'

const OverviewTab = ({ user }: { user: IUser }) => {
    return (
        <div className="space-y-6">
            <OverviewItem title={`${singleUserText.about} ${user.name?.firstname || user.username}`} description={singleUserText.briefOverview} />
            <OverviewItem title={singleUserText.bio} description={singleUserText.experienced} />
            <OverviewItem title={singleUserText.jobTitle1} description={singleUserText.jobDescription} />
            <OverviewItem title={singleUserText.organization} description={singleUserText.organizationDescription} />
        </div>
    )
}

export default OverviewTab