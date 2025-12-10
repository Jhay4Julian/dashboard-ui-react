import { FiUser } from "react-icons/fi"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const productAnalytics = [
    { month: "May", earbuds: 5500, powerbank: 2600 },
    { month: "Jun", earbuds: 3250, powerbank: 4600 },
    { month: "Jul", earbuds: 6000, powerbank: 5100 },
    { month: "Aug", earbuds: 3400, powerbank: 4800 },
    { month: "Sep", earbuds: 4500, powerbank: 4500 },
    { month: "Oct", earbuds: 4500, powerbank: 6000 },
];



const ActivityGraph = () => {
    return (
        <div className="col-span-8 border rounded-lg border-stone-300 overflow-hidden">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiUser /> Activity
                </h3>
            </div>

            {/*Graph goes here */}
            <div className="h-64 pr-3">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={productAnalytics}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                        <YAxis />
                        <Tooltip 
                        formatter={(value) => `$${value.toLocaleString()}`} />
                        <Legend />

                        <Line
                            type="monotone"
                            dataKey="earbuds"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={{ r: 2 }}
                            name="Wireless Earbuds"
                        />
                        <Line
                            type="monotone"
                            dataKey="powerbank"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            dot={{ r: 2 }}
                            name="Powerbank"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div >
    )
}

export default ActivityGraph