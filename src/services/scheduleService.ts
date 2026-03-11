import apiClient from './apiClient';

export interface ScheduleType {
  id?: number | string;
  class_name: string;
  day: string;
  period_duration: string;
  instructor: string;
  subject: string;
  status?: string;
  deleted_at?: string | null;
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let mockSchedules: ScheduleType[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  class_name: `Class 10${String.fromCharCode(65 + (i % 5))}`,
  day: days[i % 5] || "Monday",
  period_duration: `${8 + (i % 4)}:00 - ${9 + (i % 4)}:30`,
  instructor: `Guru ${i + 1}`,
  subject: `Subject ${i + 1}`,
  status: i % 8 === 0 ? "Suspended" : "Active",
  deleted_at: null
}));

export const scheduleService = {
  async getAll(): Promise<ScheduleType[]> {
    await new Promise(r => setTimeout(r, 500));
    return [...mockSchedules];
  },
  async getById(id: number | string): Promise<ScheduleType> {
    await new Promise(r => setTimeout(r, 500));
    const found = mockSchedules.find(t => String(t.id) === String(id));
    if (!found) throw new Error("Schedule not found");
    return { ...found };
  },
  async create(payload: Omit<ScheduleType, 'id'>) {
    await new Promise(r => setTimeout(r, 500));
    const newItem = { ...payload, id: Date.now() };
    mockSchedules.push(newItem);
    return { ...newItem };
  },
  async update(id: number | string, payload: Partial<ScheduleType>) {
    await new Promise(r => setTimeout(r, 500));
    const index = mockSchedules.findIndex(t => String(t.id) === String(id));
    if (index === -1) throw new Error("Schedule not found");
    mockSchedules[index] = { ...mockSchedules[index], ...payload } as ScheduleType;
    return { ...mockSchedules[index] };
  },
  async updateStatus(id: number | string, statusField: string, newValue: any) {
    await new Promise(r => setTimeout(r, 500));
    const index = mockSchedules.findIndex(t => String(t.id) === String(id));
    if (index === -1) throw new Error("Schedule not found");
    (mockSchedules[index] as any)[statusField] = newValue;
    
    // Soft delete simulation
    if (statusField === 'status' || statusField === 'enrollment_status') {
      mockSchedules[index]!.deleted_at = (newValue === 'Active') ? null : new Date().toISOString();
    }
    
    return { ...mockSchedules[index]! };
  }
};
