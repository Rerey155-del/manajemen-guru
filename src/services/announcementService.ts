import apiClient from './apiClient';

export interface AnnouncementType {
  id?: number | string;
  title: string;
  message: string;
  target_role: 'semua' | 'guru' | 'siswa';
  created_at?: string;
}

export const announcementService = {
  async getAll(): Promise<AnnouncementType[]> {
    const response = await apiClient.get('/announcements');
    return response.data;
  },
  async send(payload: Omit<AnnouncementType, 'id' | 'created_at'>) {
    const response = await apiClient.post('/announcements', payload);
    return response.data;
  }
};