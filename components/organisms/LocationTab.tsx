import { IUser } from '@/types/user'
import { singleUserText } from '@/utils/text'
import React from 'react'

const LocationTab = ({ user }: { user: IUser }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">{singleUserText.locationInformation}</h2>

            {user.address?.geolocation ? (
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-gray-500"> {singleUserText.mapPlaceholder}:</p>
                    <p>{singleUserText.lat}: {user.address.geolocation.lat},{singleUserText.long}: {user.address.geolocation.long}</p>
                </div>
            ) : (
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-gray-500"> {singleUserText.noLocation}:</p>
                </div>
            )}

            <div className="space-y-4">
                <div>
                    <h3 className="font-medium text-gray-700">{singleUserText.address}</h3>
                    <p className="text-gray-600">
                        {user.address ?
                            `${user.address.street || ''} ${user.address.number || ''}, ${user.address.city || ''}, ${user.address.zipcode || ''}` :
                            singleUserText.noAddress}
                    </p>
                </div>

                {user.address?.geolocation && (
                    <div>
                        <h3 className="font-medium text-gray-700"> {singleUserText.coordinates}</h3>
                        <p className="text-gray-600">
                            {singleUserText.lat}:{user.address.geolocation.lat}<br />
                            {singleUserText.long}: {user.address.geolocation.long}
                        </p>
                    </div>
                )}
            </div>
        </div>)
}

export default LocationTab