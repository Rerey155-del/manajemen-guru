import apiClient from './apiClient';

export interface ScheduleType {
  id?: number | string;
  class_name: string;
  day: string;
  period_duration: string;
  instructor: string;
  subject: string;
  status?: string;
}

export const scheduleService = {
  async getAll(): Promise<ScheduleType[]> {
    const { data } = await apiClient.get('/schedules');
    return Array.isArray(data) ? data : (data.data || []);
  },
  async getById(id: number | string): Promise<ScheduleType> {
    const { data } = await apiClient.get(`/schedules/${id}`);
    return data;
  },
  async create(payload: Omit<ScheduleType, 'id'>) {
    const { data } = await apiClient.post('/schedules', payload);
    return data;
  },
  async update(id: number | string, payload: Partial<ScheduleType>) {
    const { data } = await apiClient.put(`/schedules/${id}`, payload);
    return data;
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    const { data } = await apiClient.put(`/schedules/${id}`, { [statusField]: newValue });
    return data;
  }
};
