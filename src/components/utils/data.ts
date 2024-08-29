export const SIDEBAR_ITEMS = [
    {
        id: 1,
        label: "Dashboard",
    },
    {
        id: 3,
        label: "Logout"
    }
]

export const TOTAL_CONSUMPTION = {
    title: "Total Consumption",
    color: "#8884d8",
    total: "150 kWh",
    figure: 45,
    dataKey: "consump",
    chartData: [
        { day: "2024-08-01", consump: 3.8 },
        { day: "2024-08-02", consump: 4.2 },
        { day: "2024-08-03", consump: 5.5 },
        { day: "2024-08-04", consump: 4.0 },
        { day: "2024-08-05", consump: 6.0 },
        { day: "2024-08-06", consump: 3.6 },
        { day: "2024-08-07", consump: 4.1 },
        { day: "2024-08-08", consump: 5.8 },
        { day: "2024-08-09", consump: 3.9 },
        { day: "2024-08-10", consump: 4.3 },
        { day: "2024-08-11", consump: 4.9 },
        { day: "2024-08-12", consump: 2.8 },
        { day: "2024-08-13", consump: 3.7 },
        { day: "2024-08-14", consump: 5.1 },
        { day: "2024-08-15", consump: 4.0 },
        { day: "2024-08-16", consump: 6.2 },
        { day: "2024-08-17", consump: 3.5 },
        { day: "2024-08-18", consump: 4.4 },
        { day: "2024-08-19", consump: 5.0 },
        { day: "2024-08-20", consump: 3.9 },
        { day: "2024-08-21", consump: 4.7 },
        { day: "2024-08-22", consump: 5.6 },
        { day: "2024-08-23", consump: 4.2 },
        { day: "2024-08-24", consump: 3.8 },
        { day: "2024-08-25", consump: 4.9 },
        { day: "2024-08-26", consump: 3.6 },
        { day: "2024-08-27", consump: 5.4 },
        { day: "2024-08-28", consump: 4.1 },
        { day: "2024-08-29", consump: 3.7 },
        { day: "2024-08-30", consump: 6.0 },
        { day: "2024-08-31", consump: 4.2 }
    ]
}

export const TOTAL_SAVINGS = {
    title: "Total Savings",
    color: "gold",
    total: "60",
    figure: 30,
    dataKey: "savings",
    chartData: [
        { day: "2024-08-01", savings: 1.8 },
        { day: "2024-08-02", savings: 2.1 },
        { day: "2024-08-03", savings: 2.5 },
        { day: "2024-08-04", savings: 1.5 },
        { day: "2024-08-05", savings: 2.8 },
        { day: "2024-08-06", savings: 1.6 },
        { day: "2024-08-07", savings: 2.0 },
        { day: "2024-08-08", savings: 2.4 },
        { day: "2024-08-09", savings: 1.7 },
        { day: "2024-08-10", savings: 2.0 },
        { day: "2024-08-11", savings: 1.9 },
        { day: "2024-08-12", savings: 1.3 },
        { day: "2024-08-13", savings: 1.7 },
        { day: "2024-08-14", savings: 2.2 },
        { day: "2024-08-15", savings: 1.8 },
        { day: "2024-08-16", savings: 2.6 },
        { day: "2024-08-17", savings: 1.4 },
        { day: "2024-08-18", savings: 1.9 },
        { day: "2024-08-19", savings: 2.3 },
        { day: "2024-08-20", savings: 1.6 },
        { day: "2024-08-21", savings: 2.0 },
        { day: "2024-08-22", savings: 2.7 },
        { day: "2024-08-23", savings: 1.9 },
        { day: "2024-08-24", savings: 1.5 },
        { day: "2024-08-25", savings: 2.1 },
        { day: "2024-08-26", savings: 1.3 },
        { day: "2024-08-27", savings: 2.4 },
        { day: "2024-08-28", savings: 1.8 },
        { day: "2024-08-29", savings: 1.6 },
        { day: "2024-08-30", savings: 2.5 },
        { day: "2024-08-31", savings: 1.9 }
    ]
}

export const CARBON_FOOTPRINT = {
    title: "Carbon Footprint",
    color: "#FF8042",
    dataKey: "footprint",
    chartData: [
        { month: "Jan", footprint: 1200 },
        { month: "Feb", footprint: 1100 },
        { month: "Mar", footprint: 1050 },
        { month: "Apr", footprint: 1150 },
        { month: "May", footprint: 1300 },
        { month: "Jun", footprint: 1250 },
        { month: "Jul", footprint: 1350 },
        { month: "Aug", footprint: 1400 },
        { month: "Sep", footprint: 1300 },
        { month: "Oct", footprint: 1200 },
        { month: "Nov", footprint: 1100 },
        { month: "Dec", footprint: 1150 },
    ]
}

export const ENERGY_SOURCES_BREAKDOWN = {
    title: "Energy Sources Breakdown",
    chartData: [
        {
            name: "Solar",
            value: 35,
            color: "#FFD700",
        },
        {
            name: "Grid",
            value: 50,
            color: "#1E90FF",
        },
        {
            name: "Battery",
            value: 15,
            color: "#32CD32",
        }
    ]
};

export const REAL_TIME_DATA ={
  title: "Energy Consumption & Savings",
  chartData: [
    { timestamp: "2024-08-14T10:00:00Z", consumption: 5.8, savings: 2.4 },
    { timestamp: "2024-08-14T10:00:30Z", consumption: 6.1, savings: 2.2 },
    { timestamp: "2024-08-14T10:01:00Z", consumption: 5.9, savings: 2.5 },
    { timestamp: "2024-08-14T10:01:30Z", consumption: 6.3, savings: 2.3 },
    { timestamp: "2024-08-14T10:02:00Z", consumption: 6.0, savings: 2.6 },
    { timestamp: "2024-08-14T10:02:30Z", consumption: 5.7, savings: 2.4 },
    { timestamp: "2024-08-14T10:03:00Z", consumption: 6.2, savings: 2.3 },
    { timestamp: "2024-08-14T10:03:30Z", consumption: 6.1, savings: 2.1 },
    { timestamp: "2024-08-14T10:04:00Z", consumption: 6.4, savings: 2.7 },
    { timestamp: "2024-08-14T10:04:30Z", consumption: 5.8, savings: 2.3 },
  ]
};
