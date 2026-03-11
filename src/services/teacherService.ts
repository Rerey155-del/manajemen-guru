import apiClient from './apiClient';

export interface CreateTeacherPayload {
  name: string;
  nip: string;
  email: string;
  department: string; // Bisa berisi ID dari relasi atau string teks
  status: string;
}

export const teacherService = {
  /**
   * Mengirim request POST untuk menambahkan guru baru.
   */
  async createTeacher(payload: CreateTeacherPayload) {
    try {
      const response = await apiClient.post('/teachers', payload);
      return response.data;
    } catch (error: any) {
      // Tangkap dan lempar error untuk di-handle di komponen UI
      throw new Error(error.response?.data?.message || 'Gagal menambahkan data guru');
    }
  }
};
