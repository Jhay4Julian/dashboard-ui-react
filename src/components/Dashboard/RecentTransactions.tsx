import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from 'react-icons/fi'

const RecentOrders = () => {

    const recentOrders = [
        {
            customerId: "CUST-1042",
            sku: "EB-221",
            date: "2025-10-28",
            price: "$129.00",
            status: "Completed",
        },
        {
            customerId: "CUST-1038",
            sku: "PB-541",
            date: "2025-10-27",
            price: "$89.00",
            status: "Pending",
        },
        {
            customerId: "CUST-1021",
            sku: "EB-221",
            date: "2025-10-26",
            price: "$129.00",
            status: "Completed",
        },
        {
            customerId: "CUST-1087",
            sku: "PB-884",
            date: "2025-10-25",
            price: "$75.00",
            status: "Refunded",
        },
        {
            customerId: "CUST-1101",
            sku: "PB-541",
            date: "2025-10-25",
            price: "$89.00",
            status: "Completed",
        },
        {
            customerId: "CUST-0975",
            sku: "EB-993",
            date: "2025-10-24",
            price: "$149.00",
            status: "Processing",
        },
        {
            customerId: "CUST-0993",
            sku: "PB-884",
            date: "2025-10-24",
            price: "$75.00",
            status: "Completed",
        },
        {
            customerId: "CUST-1234",
            sku: "EB-551",
            date: "2025-10-23",
            price: "$179.00",
            status: "Completed",
        },
        {
            customerId: "CUST-0877",
            sku: "PB-541",
            date: "2025-10-22",
            price: "$89.00",
            status: "Failed",
        },
        {
            customerId: "CUST-1005",
            sku: "EB-221",
            date: "2025-10-21",
            price: "$129.00",
            status: "Processing",
        },
    ];

    return (
        <div className='col-span-12 p-4 rounded-lg border border-stone-300'>
            <div className='mb-4 flex items-center justify-between'>
                <h3 className='flex items-center gap-1.5 font-medium'>
                    <FiDollarSign /> Recent Transactions
                </h3>
                <button className='text-sm text-violet-500 hover:underline'>
                    See All
                </button>


            </div>
            <table className='w-full table-auto'>
                <TableHead />
                <tbody>
                    {recentOrders.map((order, index) => (
                        <TableRow
                            customerId={order.customerId}
                            sku={order.sku}
                            date={order.date}
                            price={order.price}
                            status={order.status}
                            order={index}
                            key={index} />
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default RecentOrders

const TableHead = () => {
    return (
        <thead>
            <tr className='font-normal text-sm text-stone-500'>
                <th className='text-start p-1.5'>Customer ID</th>
                <th className='text-start p-1.5'>SKU</th>
                <th className='text-start p-1.5'>Date</th>
                <th className='text-start p-1.5'>Price</th>
                <th className='text-start p-1.5'>Status</th>
                <th className='w-8'></th>
            </tr>
        </thead>
    )
}

const TableRow = ({
    customerId,
    sku,
    date,
    price,
    status,
    order
}: {
    customerId: string;
    sku: string;
    date: string;
    price: string;
    status: string;
    order: number;
}) => {

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-100 text-green-700";
            case "pending":
                return "bg-yellow-100 text-yellow-700";
            case "processing":
                return "bg-blue-100 text-blue-700";
            case "refunded":
                return "bg-red-100 text-red-700";
            case "failed":
                return "bg-rose-100 text-rose-700";
            default:
                return "bg-stone-100 text-stone-700";
        }
    };

    return (
        <tr className={order % 2 ? 'bg-stone-100 text-sm' : 'text-sm'}>
            <td className='p-1.5'>
                <a href="#" className='flex items-center gap-1 text-violet-600'>
                    {customerId} <FiArrowUpRight />
                </a>
            </td>
            <td className='p-1.5'>{sku}</td>
            <td className='p-1.5'>{date}</td>
            <td className='p-1.5'>{price}</td>
            <td className='p-1.5'>
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        status
                    )}`}
                >
                    {status}
                </span>
            </td>
            <td className='w-8'>
                <button className='grid place-content-center rounded text-sm size-8 hover:bg-stone-200 cursor-pointer'>
                    <FiMoreHorizontal />
                </button>
            </td>
        </tr>
    );
}