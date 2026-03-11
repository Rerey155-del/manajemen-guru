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
  deleted_at?: string | null;
}

let mockClasses: ClassType[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  class_designation: `Class 10${String.fromCharCode(65 + i)}`,
  room_id: `RM-${100 + i + 1}`,
  utilization: `${20 + (i % 5)}/40`,
  status: i % 7 === 0 ? "Non-Aktif" : "Active",
  deleted_at: null
}));

export const classService = {
  async autocompleteClasses(query: string): Promise<ClassAutocompleteOption[]> {
    await new Promise(r => setTimeout(r, 300));
    if (!query || query.length < 3) return [];
    return mockClasses
      .filter(c => c.class_designation.toLowerCase().includes(query.toLowerCase()))
      .map(c => ({ id: c.id!, name: c.class_designation }));
  },
  async getAll(): Promise<ClassType[]> {
    await new Promise(r => setTimeout(r, 500));
    return [...mockClasses];
  },
  async getById(id: number | string): Promise<ClassType> {
    await new Promise(r => setTimeout(r, 500));
    const found = mockClasses.find(t => String(t.id) === String(id));
    if (!found) throw new Error("Class not found");
    return { ...found };
  },
  async create(payload: Omit<ClassType, 'id'>) {
    await new Promise(r => setTimeout(r, 500));
    const newItem = { ...payload, id: Date.now() };
    mockClasses.push(newItem);
    return { ...newItem };
  },
  async update(id: number | string, payload: Partial<ClassType>) {
    await new Promise(r => setTimeout(r, 500));
    const index = mockClasses.findIndex(t => String(t.id) === String(id));
    if (index === -1) throw new Error("Class not found");
    mockClasses[index] = { ...mockClasses[index], ...payload } as ClassType;
    return { ...mockClasses[index] };
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    await new Promise(r => setTimeout(r, 500));
    const index = mockClasses.findIndex(t => String(t.id) === String(id));
    if (index === -1) throw new Error("Class not found");
    (mockClasses[index] as any)[statusField] = newValue;
    
    // Soft delete simulation
    if (statusField === 'status' || statusField === 'enrollment_status') {
      mockClasses[index]!.deleted_at = (newValue === 'Active') ? null : new Date().toISOString();
    }
    
    return { ...mockClasses[index]! };
  }
};
