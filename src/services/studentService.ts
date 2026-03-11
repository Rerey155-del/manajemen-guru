import apiClient from './apiClient';

export interface CreateStudentPayload {
  name: string;
  nis: string;
  gender: string;
  class_name: string;
  enrollment_status: string;
}

export const studentService = {
  /**
   * Mengirim request POST untuk menambahkan siswa baru.
   */
  async createStudent(payload: CreateStudentPayload) {
    try {
      const response = await apiClient.post('/students', payload);
      return response.data;
    } catch (error: any) {
      // Tangkap dan lempar error untuk di-handle di komponen UI
      throw new Error(error.response?.data?.message || 'Gagal menambahkan data siswa');
    }
  }
};
