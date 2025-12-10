import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const cardData = [
    {
        title: "Total Sales",
        value: "$24,500",
        pillText: "+12%",
        trend: "up",
        period: "Last 30 days",
    },
    {
        title: "New Users",
        value: "1,248",
        pillText: "+8%",
        trend: "up",
        period: "This Month",
    },
    {
        title: "Bounce Rate",
        value: "42%",
        pillText: "-3%",
        trend: "down",
        period: "Last 30 days",
    },
    {
        title: "Total Orders",
        value: "312",
        pillText: "+5%",
        trend: "up",
        period: "This month",
    },
    // {
    //     title: "Refund Requests",
    //     value: "18",
    //     pillText: "-7%",
    //     trend: "down",
    //     period: "Last 14 days",
    // },
];



const StatsCard = () => {
    return (
        <>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    value={card.value}
                    pillText={card.pillText}
                    trend={card.trend as 'up' | 'down'}
                    period={card.period}
                />
            ))}
        </>
    )
}

export default StatsCard

const Card = ({
    title,
    value,
    pillText,
    trend,
    period,
}: {
    title: string;
    value: string;
    pillText: string;
    trend: 'up' | 'down';
    period: string;
}) => {
    return (
        <div className="p-4 col-span-3 border border-stone-300 rounded-lg">
            <div className="flex mb-8 items-start justify-between">
                <div>
                    <h3 className="text-sm text-stone-500 mb-2">{title}</h3>
                    <p className="text-3xl font-semibold">{value}</p>
                </div>

                <span
                    className={`flex items-center gap-1 font-medium px-2 py-1 rounded-full
                         ${trend === 'up'
                            ? 'text-green-700 bg-green-100'
                            : 'text-red-700 bg-red-100'
                        }`}
                >
                    {trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                    {pillText}
                </span>
            </div>

            <p className="text-xs text-stone-500">{period}</p>

        </div>
    )
}