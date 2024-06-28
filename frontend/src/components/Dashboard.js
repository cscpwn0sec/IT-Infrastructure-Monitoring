import React from 'react';
import Metrics from './Metrics';
import Alerts from './Alerts';

const Dashboard = () => (
  <div>
    <h1>IT Infrastructure Dashboard</h1>
    <Metrics />
    <Alerts />
  </div>
);

export default Dashboard;
