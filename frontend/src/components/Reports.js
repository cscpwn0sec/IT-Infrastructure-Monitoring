import React, { useEffect, useState } from 'react';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('/reports')
      .then(response => response.json())
      .then(data => setReports(data));
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>{report.name}: {report.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
