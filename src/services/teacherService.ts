import apiClient from './apiClient';

export interface TeacherType {
  id?: number | string;
  name: string;
  nip: string;
  email: string;
  department: string;
  status: string;
}

export const teacherService = {
  async getAll(): Promise<TeacherType[]> {
    const { data } = await apiClient.get('/teachers');
    return Array.isArray(data) ? data : (data.data || []);
  },
  async getById(id: number | string): Promise<TeacherType> {
    const { data } = await apiClient.get(`/teachers/${id}`);
    return data;
  },
  async create(payload: Omit<TeacherType, 'id'>) {
    const { data } = await apiClient.post('/teachers', payload);
    return data;
  },
  async update(id: number | string, payload: Partial<TeacherType>) {
    const { data } = await apiClient.put(`/teachers/${id}`, payload);
    return data;
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    const { data } = await apiClient.put(`/teachers/${id}`, { [statusField]: newValue });
    return data;
  }
};
