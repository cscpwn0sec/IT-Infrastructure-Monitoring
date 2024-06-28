import { fetchPingData } from './api';

export const getPingMetrics = async () => {
  const data = await fetchPingData();
  return data;
};
