import { defineStore } from 'pinia';
import { teacherService, type TeacherType } from '@/services/teacherService';

export const useTeacherStore = defineStore('teacher', {
  state: () => ({
    items: [] as TeacherType[],
    detail: null as TeacherType | null,
    loadingList: false,
    loadingDetail: false,
    error: null as string | null
  }),
  actions: {
    async fetchList() {
      this.loadingList = true;
      this.error = null;
      try {
        this.items = await teacherService.getAll();
      } catch (err: any) {
        this.error = err.message || 'Failed to fetch items';
      } finally {
        this.loadingList = false;
      }
    },
    async fetchDetail(id: number | string) {
      this.loadingDetail = true;
      this.error = null;
      this.detail = null;
      try {
        this.detail = await teacherService.getById(id);
        return this.detail;
      } catch (err: any) {
        this.error = err.message || 'Failed to fetch detail';
        throw err;
      } finally {
        this.loadingDetail = false;
      }
    },
    async createItem(payload: Omit<TeacherType, 'id'>) {
      this.error = null;
      try {
        const newItem = await teacherService.create(payload);
        this.items.push(newItem);
        return newItem;
      } catch (err: any) {
        this.error = err.message || 'Failed to create item';
        throw err;
      }
    },
    async updateItem(id: number | string, payload: Partial<TeacherType>) {
      this.error = null;
      try {
        const updatedItem = await teacherService.update(id, payload);
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
          this.items[index] = { ...this.items[index], ...updatedItem };
        }
        return updatedItem;
      } catch (err: any) {
        this.error = err.message || 'Failed to update item';
        throw err;
      }
    },
    async toggleItemStatus(id: number | string, statusField: string, newValue: any) {
      this.error = null;
      try {
        await teacherService.updateStatus(id, statusField, newValue);
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
          (this.items[index] as any)[statusField] = newValue;
        }
      } catch (err: any) {
        this.error = err.message || 'Failed to update status';
        throw err;
      }
    }
  }
});
