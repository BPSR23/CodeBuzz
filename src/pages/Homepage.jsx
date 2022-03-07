import React from "react";
import { Layout } from "../components/Layout";
import  DashboardV1  from "../components/DashboardV1";
import  DashboardV1_1  from "../components/DashboardV1_1";
import  BarChart  from "../Graphs/BarChart";
import  CalNivo  from "../Graphs/CalendarNivo";

export default function Homepage() {
  return (
      <DashboardV1 />
      // {/* <BarChart />
      // <CalNivo /> */}
  );
}
