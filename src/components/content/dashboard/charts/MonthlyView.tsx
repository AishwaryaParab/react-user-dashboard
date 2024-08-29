import { Link } from "react-router-dom";
import "./Charts.css";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

interface MonthlyViewProps {
  title: string;
  color: string;
  total: number | string;
  figure: number;
  dataKey: string
  chartData: object[];
}

const MonthlyView = (props: MonthlyViewProps) => {
  return (
    <div className="monthly-view">
        <div className="view-info">
          <h4 className="title">{props.title}</h4>
          <h1>{props.total}</h1>
          <Link to="/" style={{ color: props.color }}>View all</Link>
        </div>

        <div className="chart-info">
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart width={300} height={100} data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 0, y: 70 }}
                />
                <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="insights">
            <span className="figure" style={{ color: props.figure < 0 ? "tomato" : "limegreen" }}>{props.figure}%</span>
            <span className="duration">this month</span>
          </div>
        </div>
    </div>
  )
}

export default MonthlyView