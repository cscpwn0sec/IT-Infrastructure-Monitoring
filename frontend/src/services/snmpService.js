import { fetchSNMPData } from './api';

export const getSNMPMetrics = async () => {
  const data = await fetchSNMPData();
  return data;
};
