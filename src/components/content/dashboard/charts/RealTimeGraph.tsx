import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./Charts.css";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

interface RealTimeData {
    timestamp: string;
    consumption: number;
    savings: number;
}

interface RealTimeGraphProps {
    title: string;
    chartData: RealTimeData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: "10px" }}>
        <p className="label" style={{ color: "#2a3447" }}>{`Timestamp: ${label}`}</p>
        <p style={{ color: "#8884d8" }}>{`Consumption: ${payload[0].value} KWh`}</p>
        <p style={{ color: "#82ca9d" }}>{`Savings: ${payload[1].value} KWh`}</p>
      </div>
    );
  }

  return null;
};

const RealTimeGraph = ({ title, chartData }: RealTimeGraphProps) => {
  const [isPulsating, setIsPulsating] = useState(true);
  const [data, setData] = useState<RealTimeData[]>(chartData);
  const lastPointIndex = data.length - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsating(false);
    }, 5000)

    return () => clearTimeout(timer);
  }, [isPulsating]);

  useEffect(() => {
    const fetchDataPoint = async () => {
      const response = await fetch('https://mockservice.com/data/v1/energy-consumption');
      const newData = await response.json();
      setData((prevData) => [
        ...prevData,
        {
          timestamp: newData.timestamp,
          consumption: parseFloat(newData.consumption),
          savings: parseFloat(newData.savings),
        },
      ]);
      setIsPulsating(true);
    };

    const interval = setInterval(fetchDataPoint, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="real-time-graph">
        <h1 className="main-title">{title}</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="consumption"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                dot={(props) => {
                  const { cx, cy, index } = props;
                  return index === lastPointIndex && isPulsating ? (
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={8}
                      fill="#8884d8"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'loop',
                      }}
                    />
                  ) : (
                    <circle cx={cx} cy={cy} r={4} fill="#8884d8" />
                  );
                }}
              />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
                dot={(props) => {
                  const { cx, cy, index } = props;
                  return index === lastPointIndex && isPulsating ? (
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={8}
                      fill="#82ca9d"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'loop',
                      }}
                    />
                  ) : (
                    <circle cx={cx} cy={cy} r={4} fill="#82ca9d" />
                  );
                }}
              />
            </LineChart>
        </ResponsiveContainer>
        </div>

    </div>
  )
}

export default RealTimeGraph