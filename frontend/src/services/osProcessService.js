import { fetchOSProcessData } from './api';

export const getOSProcessMetrics = async () => {
  const data = await fetchOSProcessData();
  return data;
};
