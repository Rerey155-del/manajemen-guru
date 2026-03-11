import { defineStore } from 'pinia';
import { scheduleService, type ScheduleType } from '@/services/scheduleService';

export const useScheduleStore = defineStore('schedule', {
  state: () => ({
    items: [] as ScheduleType[],
    detail: null as ScheduleType | null,
    loadingList: false,
    loadingDetail: false,
    error: null as string | null
  }),
  actions: {
    async fetchList() {
      this.loadingList = true;
      this.error = null;
      try {
        this.items = await scheduleService.getAll();
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
        this.detail = await scheduleService.getById(id);
        return this.detail;
      } catch (err: any) {
        this.error = err.message || 'Failed to fetch detail';
        throw err;
      } finally {
        this.loadingDetail = false;
      }
    },
    async createItem(payload: Omit<ScheduleType, 'id'>) {
      this.error = null;
      try {
        const newItem = await scheduleService.create(payload);
        this.items.push(newItem);
        return newItem;
      } catch (err: any) {
        this.error = err.message || 'Failed to create item';
        throw err;
      }
    },
    async updateItem(id: number | string, payload: Partial<ScheduleType>) {
      this.error = null;
      try {
        const updatedItem = await scheduleService.update(id, payload);
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
        await scheduleService.updateStatus(id, statusField, newValue);
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
