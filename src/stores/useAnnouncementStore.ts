import { defineStore } from 'pinia';
import { announcementService, type AnnouncementType } from '@/services/announcementService';

export const useAnnouncementStore = defineStore('announcement', {
  state: () => ({
    items: [] as AnnouncementType[],
    loadingList: false,
    loadingAction: false,
  }),
  actions: {
    async fetchList() {
      this.loadingList = true;
      try {
        this.items = await announcementService.getAll();
      } finally {
        this.loadingList = false;
      }
    },
    async broadcast(payload: Omit<AnnouncementType, 'id' | 'created_at'>) {
      this.loadingAction = true;
      try {
        await announcementService.send(payload);
        await this.fetchList();
      } catch (error) {
        console.error("Gagal mengirim broadcast:", error);
        throw error;
      } finally {
        this.loadingAction = false;
      }
    }
  }
});