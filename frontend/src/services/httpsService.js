import { fetchHTTPSData } from './api';

export const getHTTPSMetrics = async () => {
  const data = await fetchHTTPSData();
  return data;
};
