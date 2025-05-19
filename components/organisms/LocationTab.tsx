
import { IUser } from '@/types/user';
import OverviewItem from '../molecules/OverviewItem';
import { singleUserText } from '@/utils/text';
import Map from '../molecules/Map';

const LocationTab = ({ user }: { user: IUser }) => {

    if (!user.address?.geolocation?.lat || !user.address?.geolocation?.long) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                <p className="text-gray-500">{singleUserText.noLocation}</p>
            </div>
        );
    }

    return (
        <>
            <div className=" flex flex-col  space-y-2 mb-10">
                <OverviewItem title={singleUserText.address} description={`${user.address?.street}, ${user.address?.city}, ${user.address?.zipcode}`} />
                <OverviewItem title={singleUserText.coordinates} description={`${user.address?.geolocation?.lat}, ${user.address?.geolocation?.long}`} />
            </div>
            <Map user={user} />
        </>
    );
}


export default LocationTab