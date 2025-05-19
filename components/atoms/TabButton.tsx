import { ETabType } from "@/types/enum"

const TabButton = ({ isActive, handleClick, title }: { isActive: boolean, handleClick: () => void, title: ETabType }) => {
    return (
        <button onClick={handleClick} className={`flex-1 py-4 text-center ${isActive ? 'border-b-2 border-gray-800 text-gray-800' : 'text-gray-500'}`} >
            {title}
        </button>
    )
}

export default TabButton