import { IUser } from '@/types/user';
import { useRouter } from 'next/router';

export const UserItem = ({ user }: { user: IUser }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/users/${user.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow
        dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center
            dark:bg-gray-700">
            <span className="text-gray-600 dark:text-gray-300">
              {user.name.firstname[0]}{user.name.lastname[0]}
            </span>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="font-semibold dark:text-white">
            {user.name.firstname} {user.name.lastname}
          </h3>
          <p className="text-gray-600 truncate dark:text-gray-300">
            {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};