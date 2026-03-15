<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { Icon } from "@iconify/vue";
import { useAnnouncementStore } from "@/stores/useAnnouncementStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const store = useAnnouncementStore();
const router = useRouter();

onMounted(() => store.fetchList());
</script>

<template>
  <div class="drawer lg:drawer-open bg-base-200 min-h-screen">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content p-6 lg:p-10">
      <header class="flex justify-between items-center mb-10">
        <div>
          <h1 class="text-4xl font-black text-base-content">Broadcast Hub</h1>
          <p class="text-base-content/50 font-medium">Monitoring pengumuman Kafka Queue.</p>
        </div>
        <button @click="router.push('/announcements/add')" class="btn btn-primary rounded-2xl font-bold px-8 shadow-lg shadow-primary/20 capitalize">
          <Icon icon="lucide:megaphone" class="w-5 h-5 mr-1" /> Buat Broadcast
        </button>
      </header>

      <div class="bg-base-100 rounded-[2.5rem] shadow-xl border border-base-content/5 overflow-hidden">
        <div v-if="store.loadingList" class="p-20 text-center">
          <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
        <table v-else class="table table-lg w-full">
          <thead>
            <tr class="text-base-content/30 uppercase tracking-widest text-[10px] border-b border-base-content/5">
              <th class="p-8">Judul</th>
              <th>Isi Pesan</th>
              <th>Target</th>
              <th class="text-right p-8">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in store.items" :key="item.id" class="border-b border-base-content/5 hover:bg-base-200/50 transition-colors">
              <td class="p-8 font-bold text-lg">{{ item.title }}</td>
              <td class="max-w-xs truncate">{{ item.message }}</td>
              <td>
                <span class="badge badge-info bg-info/10 text-info border-none font-black text-[10px] uppercase px-3 py-3">
                  {{ item.target_role }}
                </span>
              </td>
              <td class="text-right p-8 text-base-content/40 font-mono">{{ item.created_at }}</td>
            </tr>
            <tr v-if="store.items.length === 0">
              <td colspan="4" class="p-20 text-center italic text-base-content/20 font-bold text-lg">
                Belum ada pengumuman yang dikirim.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Sidebar />
  </div>
</template>