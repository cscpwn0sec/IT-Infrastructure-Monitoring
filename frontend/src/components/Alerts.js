import React, { useEffect, useState } from 'react';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('/alerts')
      .then(response => response.json())
      .then(data => setAlerts(data));
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert.alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
