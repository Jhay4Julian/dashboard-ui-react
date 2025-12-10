const Plan = () => {
    return (
        <div className='flex sticky flex-col h-12 top-[calc(100vh-48px-16px)] border-t border-stone-300 justify-end text-xs'>
            <div className="flex items-center justify-between p-1.5">
                <div>
                    <p className="font-semibold">Enterprise</p>
                    <p className="text-stone-500">Pay as you go</p>
                </div>

                <button className="px-2 py-1.5 bg-stone-200 rounded font-medium hover:bg-stone-300 cursor-pointer transition-colors">
                    Upgrade
                </button>
            </div>
        </div>
    )
}

export default Plan