import DashboardTour from "../../tour/DashboardTour";
import { CARBON_FOOTPRINT, ENERGY_SOURCES_BREAKDOWN, REAL_TIME_DATA, TOTAL_CONSUMPTION, TOTAL_SAVINGS } from "../../utils/data";
import "./Dashboard.css";
import CarbonFootprint from "./charts/CarbonFootprint";
import EnergySources from "./charts/EnergySources";
import MonthlyView from "./charts/MonthlyView";
import RealTimeGraph from "./charts/RealTimeGraph";

const Dashboard = () => {
  return (
    <>
      <DashboardTour />
      <div className="dashboard">
        <div className="box box1"><MonthlyView {...TOTAL_CONSUMPTION} /></div>
        <div className="box box2"><MonthlyView {...TOTAL_SAVINGS} /></div>
        <div className="box box3"><EnergySources {...ENERGY_SOURCES_BREAKDOWN} /></div>
        <div className="box box4"><RealTimeGraph {...REAL_TIME_DATA} /></div>
        <div className="box box5"><CarbonFootprint {...CARBON_FOOTPRINT} /></div>
      </div>
    </>
  )
}

export default Dashboard