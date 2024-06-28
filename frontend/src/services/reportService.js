import { fetchReportData } from './api';

export const getReportMetrics = async () => {
  const data = await fetchReportData();
  return data;
};
