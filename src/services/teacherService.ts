import apiClient from './apiClient';

export interface TeacherType {
  id?: number | string;
  name: string;
  nip: string;
  email: string;
  department: string;
  status: string;
  deleted_at?: string | null;
}

let mockTeachers: TeacherType[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Guru ${i + 1}`,
  nip: `198000000${(i + 1).toString().padStart(3, '0')}`,
  email: `guru${i + 1}@school.edu`,
  department: i % 2 === 0 ? "Mathematics" : "Science",
  status: i % 5 === 0 ? 'Non-Aktif' : 'Active',
  deleted_at: null
}));

export const teacherService = {
  async getAll(): Promise<TeacherType[]> {
    await new Promise(r => setTimeout(r, 500));
    return [...mockTeachers];
  },
  async getById(id: number | string): Promise<TeacherType> {
    await new Promise(r => setTimeout(r, 500));
    const found = mockTeachers.find(t => String(t.id) === String(id));
    if (!found) throw new Error("Teacher not found");
    return { ...found };
  },
  async create(payload: Omit<TeacherType, 'id'>) {
    await new Promise(r => setTimeout(r, 500));
    const newTeacher = { ...payload, id: Date.now() };
    mockTeachers.push(newTeacher);
    return { ...newTeacher };
  },
  async update(id: number | string, payload: Partial<TeacherType>) {
    await new Promise(r => setTimeout(r, 500));
    const index = mockTeachers.findIndex(t => String(t.id) === String(id));
    if (index === -1) throw new Error("Teacher not found");
    mockTeachers[index] = { ...mockTeachers[index], ...payload } as TeacherType;
    return { ...mockTeachers[index] };
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    await new Promise(r => setTimeout(r, 500));
    const index = mockTeachers.findIndex(t => String(t.id) === String(id));
    if (index === -1) throw new Error("Teacher not found");
    (mockTeachers[index] as any)[statusField] = newValue;
    
    // Soft delete simulation
    if (statusField === 'status' || statusField === 'enrollment_status') {
      mockTeachers[index]!.deleted_at = (newValue === 'Active') ? null : new Date().toISOString();
    }
    
    return { ...mockTeachers[index]! };
  }
};
