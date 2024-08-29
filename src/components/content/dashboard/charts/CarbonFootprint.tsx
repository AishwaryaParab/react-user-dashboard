import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import "./Charts.css";
import useTheme from "../../../../hooks/useTheme";

interface CarbonFootprintProps {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

const CarbonFootprint = (props: CarbonFootprintProps) => {
  const { theme } = useTheme();

  return (
    <div className="bar-chart">
        <h1 className="main-title">{props.title}</h1>
        <div>
            <ResponsiveContainer width="99%" height={200}>
                <BarChart data={props.chartData}>
                    <XAxis dataKey="month" angle={-45} dy={10} tick={{ fill: theme === "light" ? "#000" : "#fff" }} />
                    <Tooltip
                        contentStyle={{ background: "#2a3447", border: "5px"}}
                        labelStyle={{ display: "none" }}
                        cursor={{ fill: "none" }}
                    />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default CarbonFootprint