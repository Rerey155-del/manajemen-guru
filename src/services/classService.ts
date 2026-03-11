import apiClient from './apiClient';

export interface ClassAutocompleteOption {
  id: string | number;
  name: string;
}

export interface ClassType {
  id?: number | string;
  class_designation: string;
  room_id: string;
  utilization: string;
  status?: string;
}

export const classService = {
  async autocompleteClasses(query: string): Promise<ClassAutocompleteOption[]> {
    try {
      if (!query || query.length < 3) return [];
      const response = await apiClient.get(`/classes/autocomplete`, { params: { search: query } });
      return response.data;
    } catch (error) {
      console.error('Error fetching autocomplete classes:', error);
      return [];
    }
  },
  async getAll(): Promise<ClassType[]> {
    const { data } = await apiClient.get('/classes');
    return Array.isArray(data) ? data : (data.data || []);
  },
  async getById(id: number | string): Promise<ClassType> {
    const { data } = await apiClient.get(`/classes/${id}`);
    return data;
  },
  async create(payload: Omit<ClassType, 'id'>) {
    const { data } = await apiClient.post('/classes', payload);
    return data;
  },
  async update(id: number | string, payload: Partial<ClassType>) {
    const { data } = await apiClient.put(`/classes/${id}`, payload);
    return data;
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    const { data } = await apiClient.put(`/classes/${id}`, { [statusField]: newValue });
    return data;
  }
};
