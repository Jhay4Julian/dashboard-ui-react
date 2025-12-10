import ActivityGraph from "./ActivityGraph"
import RecentTransactions from "./RecentTransactions"
import StatsCard from "./StatsCard"
import UsageRadar from "./UsageRadar"

const Grid = () => {
  return (
    <div className="grid gap-3 grid-cols-12">
        <StatsCard />
        <ActivityGraph />
        <UsageRadar />
        <RecentTransactions />
    </div>
  )
}

export default Grid