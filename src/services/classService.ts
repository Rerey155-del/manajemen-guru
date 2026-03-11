import apiClient from './apiClient';

export interface ClassAutocompleteOption {
  id: string | number;
  name: string;
}

export const classService = {
  /**
   * Mengambil data Autocomplete untuk dropdown Relasi (Kelas)
   * menggunakan debounced GET api dengan search query minimum 3 karakter.
   */
  async autocompleteClasses(query: string): Promise<ClassAutocompleteOption[]> {
    try {
      if (!query || query.length < 3) return []; // Validasi minimum karaklter

      const response = await apiClient.get(`/classes/autocomplete`, {
        params: { search: query }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching autocomplete classes:', error);
      return []; // Return fallback kosong jika gagal
    }
  }
};
