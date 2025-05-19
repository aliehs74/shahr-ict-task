import { EIconName } from "@/types/enum";
import { IUser } from "@/types/user";
import IconMaker from "@/utils/IconMaker";
import { singleUserText } from "@/utils/text";
import Image from "next/image";
import Link from "next/link";

const UserSidebar = ({ user }: { user: IUser }) => {
    const userSkils = ["Next", "TailwindCSS", "React", "TypeScript", "Redux", "Saga", "RTK Query"]
    return (
        <div className="w-full min-h-[90vh] md:w-1/3">
            <div className="bg-white rounded-lg shadow overflow-hidden h-full">

                <div className="bg-gray-800 h-32 relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="rounded-full bg-white p-1">
                            <Image
                                width={100}
                                height={100}
                                className="rounded-full mb-4"
                                style={{ width: "auto", height: "auto", borderRadius: "50%" }}
                                src={user.id % 2 === 0 ? '/woman.webp' : '/man.webp'}
                                alt={user.username}
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-16 pb-6 px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{user?.name ? `${user.name.firstname || ''} ${user.name.lastname || ''}` : user?.username}</h2>
                    <p className="text-gray-500 text-sm">
                        {singleUserText.jobTitle}
                    </p>
                </div>

                <div className="px-4 pb-6 space-y-2">
                    <div className="flex items-center gap-3 text-gray-600">
                        <IconMaker name={EIconName.EMAIL} props={{ className: "text-gray-800 flex-shrink-0", size: 20 }} />

                        <Link href={`mailto:${user.email}`} target="_blank" className="text-sm truncate">
                            {user.email}
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                        <IconMaker name={EIconName.PHONE} props={{ className: "text-gray-800 flex-shrink-0", size: 20 }} />

                        <Link href={`tel:${user.phone}`} target="_blank" className="text-sm"> {user.phone} </Link>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                        <IconMaker name={EIconName.LOCATION} props={{ className: "text-gray-800 flex-shrink-0", size: 20 }} />

                        <p className="text-sm">
                            {user.address && `${user.address.street || ''} ${user.address.number || ''}, ${user.address.city || ''}, ${user.address.zipcode || ''}`}
                        </p>
                    </div>
                </div>

                <div className="px-4 pb-6">
                    <h3 className="font-bold text-lg mb-3">{singleUserText.skills}</h3>
                    <div className="flex flex-wrap gap-2">
                        {userSkils.map((skill, index) => (<span key={index} className="bg-gray-100 px-3 py-1 text-sm rounded-md">{skill}</span>))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserSidebar