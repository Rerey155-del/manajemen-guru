import apiClient from './apiClient';

export interface SubjectAutocompleteOption {
  id: string | number;
  name: string;
}

export interface SubjectType {
  id?: number | string;
  subject_name: string;
  academic_code: string;
  metadata: string[] | string;
  status?: string; // Optional field for status changes
}

export const subjectService = {
  async autocompleteSubjects(query: string): Promise<SubjectAutocompleteOption[]> {
    try {
      if (!query || query.length < 3) return [];
      const response = await apiClient.get(`/subjects/autocomplete`, { params: { search: query } });
      return response.data;
    } catch (error) {
      console.error('Error fetching autocomplete subjects:', error);
      return [];
    }
  },
  async getAll(): Promise<SubjectType[]> {
    const { data } = await apiClient.get('/subjects');
    return Array.isArray(data) ? data : (data.data || []);
  },
  async getById(id: number | string): Promise<SubjectType> {
    const { data } = await apiClient.get(`/subjects/${id}`);
    return data;
  },
  async create(payload: Omit<SubjectType, 'id'>) {
    const { data } = await apiClient.post('/subjects', payload);
    return data;
  },
  async update(id: number | string, payload: Partial<SubjectType>) {
    const { data } = await apiClient.put(`/subjects/${id}`, payload);
    return data;
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    const { data } = await apiClient.put(`/subjects/${id}`, { [statusField]: newValue });
    return data;
  }
};
