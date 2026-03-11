import apiClient from './apiClient';

export interface StudentType {
  id?: number | string;
  name: string;
  nis: string;
  gender: string;
  class_name: string;
  enrollment_status: string;
}

export const studentService = {
  async getAll(): Promise<StudentType[]> {
    const { data } = await apiClient.get('/students');
    return Array.isArray(data) ? data : (data.data || []);
  },
  async getById(id: number | string): Promise<StudentType> {
    const { data } = await apiClient.get(`/students/${id}`);
    return data;
  },
  async create(payload: Omit<StudentType, 'id'>) {
    const { data } = await apiClient.post('/students', payload);
    return data;
  },
  async update(id: number | string, payload: Partial<StudentType>) {
    const { data } = await apiClient.put(`/students/${id}`, payload);
    return data;
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    const { data } = await apiClient.put(`/students/${id}`, { [statusField]: newValue });
    return data;
  }
};
