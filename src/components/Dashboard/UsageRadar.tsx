import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip
} from "recharts";

const usageRadarData = [
  { metric: "Sales Volume", earbuds: 95, powerbank: 88 },
  { metric: "Customer Satisfaction", earbuds: 85, powerbank: 80 },
  { metric: "Market Share", earbuds: 90, powerbank: 84 },
  { metric: "Return Rate", earbuds: 70, powerbank: 78 },
  { metric: "Brand Awareness", earbuds: 92, powerbank: 87 },
];

const UsageRadar = () => {
  return (
    <div className="h-64 col-span-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={usageRadarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Radar
            name="Wireless Earbuds"
            dataKey="earbuds"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.5}
          />
          <Radar
            name="Powerbank"
            dataKey="powerbank"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageRadar;
