import { fetchAlertData } from './api';

export const getAlertMetrics = async () => {
  const data = await fetchAlertData();
  return data;
};
