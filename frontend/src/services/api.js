const API_BASE_URL = 'http://localhost:5000';

export const fetchPingData = async () => {
  const response = await fetch(`${API_BASE_URL}/ping`);
  return await response.json();
};

export const fetchHTTPSData = async () => {
  const response = await fetch(`${API_BASE_URL}/https`);
  return await response.json();
};

export const fetchSNMPData = async () => {
  const response = await fetch(`${API_BASE_URL}/snmp`);
  return await response.json();
};

export const fetchOSProcessData = async () => {
  const response = await fetch(`${API_BASE_URL}/os`);
  return await response.json();
};

export const fetchBandwidthData = async () => {
  const response = await fetch(`${API_BASE_URL}/bandwidth`);
  return await response.json();
};

export const fetchReportData = async () => {
  const response = await fetch(`${API_BASE_URL}/reports`);
  return await response.json();
};
