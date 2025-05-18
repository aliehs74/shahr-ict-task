import { IUser } from '@/types/user';
import Image from "next/image";
import IconMaker from "../../utils/IconMaker";
import { EIconName } from "@/types/enum";

interface IUserItemProps {
  user: IUser,
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const UserItem = ({ user, handleClick }: IUserItemProps) => {

  return (
    <div className="flex items-center justify-start gap-1 cursor-pointer p-1 mb-2 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:bg-gray-700" onClick={handleClick} >
      <Image
        className=" mb-4"
        width={40}
        height={20}
        style={{ width: "auto", height: "auto" }}
        src={user.id % 2 === 0 ? '/woman.webp' : '/man.webp'}
        alt={user.username}
      />

      <div className="flex flex-col w-5/6">

        <h3 className="font-bold text-xs truncate max-w-[90%] dark:text-white">
          {user.name?.firstname}  {user.name?.lastname}
        </h3>

        <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-400 w-[90%]">
          @{user.username}
        </span>

        <div className="flex  justify-between items-center mt-2 w-[95%]">
          <div className="flex flex-col justify-between items-start ">

            <span className="text-gray-600 dark:text-gray-400 text-xs">
              ${user.phone}
            </span>

            <span className=" dark:text-gray-400 text-xs">
              {user?.address?.city} ({user?.address?.street})
            </span>

          </div>
          <IconMaker name={EIconName.ARROW_RIGHT} />
        </div>

      </div>
    </div>
  );
};