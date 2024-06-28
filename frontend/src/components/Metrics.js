import React, { useEffect, useState } from 'react';

const Metrics = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetch('/metrics')
      .then(response => response.json())
      .then(data => setMetrics(data));
  }, []);

  return (
    <div>
      <h2>Metrics</h2>
      <ul>
        {metrics.map((metric, index) => (
          <li key={index}>{metric.name}: {metric.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Metrics;
