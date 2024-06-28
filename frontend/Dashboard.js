import React from 'react';
import Metrics from './Metrics';
import Alerts from './Alerts';
import Reports from './Reports';
import CustomMetrics from './CustomMetrics';
import Settings from './Settings';

const Dashboard = () => (
  <div>
    <h1>IT Infrastructure Dashboard</h1>
    <Metrics />
    <CustomMetrics />
    <Alerts />
    <Reports />
    <Settings />
  </div>
);

export default Dashboard;
