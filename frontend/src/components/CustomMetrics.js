import React, { useEffect, useState } from 'react';

const CustomMetrics = () => {
  const [customMetrics, setCustomMetrics] = useState([]);

  useEffect(() => {
    fetch('/custom-metrics')
      .then(response => response.json())
      .then(data => setCustomMetrics(data));
  }, []);

  return (
    <div>
      <h2>Custom Metrics</h2>
      <ul>
        {customMetrics.map((metric, index) => (
          <li key={index}>{metric.name}: {metric.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomMetrics;
