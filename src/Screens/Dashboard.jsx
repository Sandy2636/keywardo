import React, { useState } from "react";
import "../Styles/Dashboard.scss";
import { DonutChart } from "../Components/Chart";
import CustomTable from "../Components/CustomTable";
import TableData from "../Data/TableData";

const ChartData = [
  {
    group: "Male",
    clicks: "348",
    conversion: "42",
    cost: "12528",
    revenue: "62118",
  },
  {
    group: "Female",
    clicks: "692",
    conversion: "35",
    cost: "24912",
    revenue: "5175",
  },
  {
    group: "Unknown",
    clicks: "105",
    conversion: "3",
    cost: "3943",
    revenue: "4489",
  },
];

function Dashboard() {
  const [showChart, setShowChart] = useState(true);
  const [category, setCategory] = useState("clicks");
  return (
    <div className="dashboardHolder">
      <div className="dashboardItems">
        <div className="itemHead">
          <h6>Ad Insights</h6>
          <div className="itemOption">
            <p>?</p>
          </div>
        </div>
        <div className="itemBody">
          <CustomTable data={TableData} />
        </div>
      </div>
      <div className="dashboardItems">
        <div className="itemHead">
          <h6>Ad Insights</h6>
          <div className="itemOption">
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value={"clicks"}>Clicks</option>
              <option value={"conversion"}>Conversion</option>
              <option value={"cost"}>Cost</option>
              <option value={"revenue"}>Revenue</option>
            </select>
            <p>?</p>
          </div>
        </div>
        <div className="itemBody">
          {" "}
          {showChart ? (
            <DonutChart Data={ChartData} property={category} />
          ) : (
            <CustomTable data={ChartData} />
          )}
          <div className="switchHolder">
            <span>Table</span>
            <label className="switch">
              <input
                checked={showChart}
                onChange={(e) => {
                  setShowChart(e.target.checked);
                }}
                type="checkbox"
              />
              <span className="slider"></span>
            </label>
            <span>Chart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
