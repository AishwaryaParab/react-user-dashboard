import { PieChart, ResponsiveContainer, Pie, Cell, Tooltip } from "recharts";
import "./Charts.css";
import { useState } from "react";

interface PieChartProps {
    name: string;
    value: number;
    color: string;
}

interface EnergySourcesProps {
    title: string;
    chartData: PieChartProps[];
}

const EnergySources = ({ title, chartData }: EnergySourcesProps) => {

  return (
    <div className="energy-sources">
        <h1 className="main-title">{title}</h1>

        <div className="pie-chart">
            <ResponsiveContainer width="99%" height={300}>
                <PieChart>
                    <Tooltip
                        contentStyle={{ background: "white", borderRadius: "5px" }}
                    />
                    <Pie
                        data={chartData}
                        innerRadius={"60%"}
                        outerRadius={"80%"}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {chartData.map((item, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={item.color}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>

        <div className="legends">
            {chartData.map((item) => (
                <div className="legend" key={item.name}>
                    <div>
                        <div className="dot" style={{ backgroundColor: item.color }} />
                        <span className="legend-name">{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EnergySources