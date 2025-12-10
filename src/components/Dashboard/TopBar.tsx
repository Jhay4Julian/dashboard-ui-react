import { FiCalendar } from "react-icons/fi"

const TopBar = () => {
    return (
        <div className="mb-4 pb-3 border-b border-stone-200">
            <div className="flex items-center justify-between" >
                <div>
                    <span className="text-sm font-semibold block">
                        Good afternoon, Julian!
                    </span>
                    <span className="text-xs block text-stone-500">
                        Wednesday, Nov 5th 2025
                    </span>
                </div>

                <button className="flex items-center gap-2 text-sm bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded cursor-pointer">
                    <FiCalendar />
                    <span>Prev 6 Months</span>
                </button>
            </div>
        </div>
    )
}

export default TopBar