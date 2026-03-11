import apiClient from './apiClient';

export interface SubjectAutocompleteOption {
  id: string | number;
  name: string;
}

export const subjectService = {
  /**
   * Mengambil data Autocomplete untuk dropdown Relasi (Mata Pelajaran dsb)
   * menggunakan debounced GET api dengan search query minimum 3 karakter.
   */
  async autocompleteSubjects(query: string): Promise<SubjectAutocompleteOption[]> {
    try {
      if (!query || query.length < 3) return []; // Validasi minimum karaklter

      const response = await apiClient.get(`/subjects/autocomplete`, {
        params: { search: query }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching autocomplete subjects:', error);
      return []; // Return fallback kosong jika gagal
    }
  }
};
