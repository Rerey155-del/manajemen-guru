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
  deleted_at?: string | null;
}

let mockSubjects: SubjectType[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  subject_name: `Subject ${i + 1}`,
  academic_code: `SUBJ${(i + 1).toString().padStart(3, '0')}`,
  metadata: ["Core", i % 2 === 0 ? "Science" : "Language", `Grade 10`],
  status: i % 6 === 0 ? "Non-Aktif" : "Active",
  deleted_at: null
}));

export const subjectService = {
  async autocompleteSubjects(query: string): Promise<SubjectAutocompleteOption[]> {
    await new Promise(r => setTimeout(r, 300));
    if (!query || query.length < 3) return [];
    return mockSubjects
      .filter(s => s.subject_name.toLowerCase().includes(query.toLowerCase()))
      .map(s => ({ id: s.id!, name: s.subject_name }));
  },
  async getAll(): Promise<SubjectType[]> {
    await new Promise(r => setTimeout(r, 500));
    return [...mockSubjects];
  },
  async getById(id: number | string): Promise<SubjectType> {
    await new Promise(r => setTimeout(r, 500));
    const found = mockSubjects.find(t => String(t.id) === String(id));
    if (!found) throw new Error("Subject not found");
    return { ...found };
  },
  async create(payload: Omit<SubjectType, 'id'>) {
    await new Promise(r => setTimeout(r, 500));
    const newItem = { ...payload, id: Date.now() };
    mockSubjects.push(newItem);
    return { ...newItem };
  },
  async update(id: number | string, payload: Partial<SubjectType>) {
    await new Promise(r => setTimeout(r, 500));
    const index = mockSubjects.findIndex(t => String(t.id) === String(id));
    if (index === -1) throw new Error("Subject not found");
    mockSubjects[index] = { ...mockSubjects[index], ...payload } as SubjectType;
    return { ...mockSubjects[index] };
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    await new Promise(r => setTimeout(r, 500));
    const index = mockSubjects.findIndex(t => String(t.id) === String(id));
    if (index === -1) throw new Error("Subject not found");
    (mockSubjects[index] as any)[statusField] = newValue;
    
    // Soft delete simulation
    if (statusField === 'status' || statusField === 'enrollment_status') {
      mockSubjects[index]!.deleted_at = (newValue === 'Active') ? null : new Date().toISOString();
    }
    
    return { ...mockSubjects[index]! };
  }
};
