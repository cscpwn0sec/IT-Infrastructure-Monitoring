import { fetchBandwidthData } from './api';

export const getBandwidthMetrics = async () => {
  const data = await fetchBandwidthData();
  return data;
};
