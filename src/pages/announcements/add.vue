<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "vue";
import { useAnnouncementStore } from "@/stores/useAnnouncementStore";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const store = useAnnouncementStore();
const router = useRouter();
const form = ref({
  title: "",
  message: "",
  target_role: "semua" as "semua" | "guru" | "siswa",
});

const handleSubmit = async () => {
  try {
    await store.broadcast(form.value);
    router.push("/announcements");
  } catch (error: any) {
    console.error("Broadcast error:", error);
    const msg =
      error.response?.data?.message || error.message || "Terjadi kesalahan";
    alert("Gagal mengirim broadcast: " + msg);
  }
};
</script>

<template>
  <div class="drawer lg:drawer-open bg-base-200 min-h-screen">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content p-6 lg:p-10 flex justify-center items-start">
      <div
        class="w-full max-w-2xl bg-base-100 p-10 rounded-[2.5rem] shadow-2xl border border-base-content/5 mt-10"
      >
        <header class="mb-10">
          <button
            @click="router.push('/announcements')"
            class="btn btn-ghost btn-sm rounded-lg mb-4 text-base-content/40 hover:text-primary transition-colors"
          >
            <Icon icon="lucide:arrow-left" /> Kembali
          </button>
          <h2 class="text-3xl font-black text-base-content tracking-tight">
            Compose Broadcast
          </h2>
          <p class="text-base-content/40 font-medium">
            Pesan ini akan dikirim ke antrean Kafka.
          </p>
        </header>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="form-control">
            <label
              class="label text-xs font-black uppercase tracking-widest text-base-content/40"
              >Judul Pengumuman</label
            >
            <input
              v-model="form.title"
              class="input input-bordered bg-base-200/50 border-none rounded-2xl h-14 font-bold"
              required
              placeholder="Contoh: Libur Sekolah"
            />
          </div>
          <div class="form-control">
            <label
              class="label text-xs font-black uppercase tracking-widest text-base-content/40"
              >Target Penerima</label
            >
            <select
              v-model="form.target_role"
              class="select select-bordered bg-base-200/50 border-none rounded-2xl h-14 font-bold"
            >
              <option value="semua">Seluruh Civitas</option>
              <option value="guru">Hanya Guru</option>
              <option value="siswa">Hanya Siswa</option>
            </select>
          </div>
          <div class="form-control">
            <label
              class="label text-xs font-black uppercase tracking-widest text-base-content/40"
              >Isi Pengumuman</label
            >
            <textarea
              v-model="form.message"
              class="textarea textarea-bordered bg-base-200/50 border-none rounded-2xl h-40 font-bold p-4"
              required
              placeholder="Tulis rincian pengumuman di sini..."
            ></textarea>
          </div>
          <button
            class="btn btn-primary w-full h-16 rounded-[1.2rem] font-black text-lg shadow-xl shadow-primary/30 border-none mt-4 transition-all hover:scale-[1.02] active:scale-95"
            :disabled="store.loadingAction"
          >
            <span
              v-if="store.loadingAction"
              class="loading loading-spinner"
            ></span>
            <Icon v-else icon="lucide:megaphone" class="w-6 h-6 mr-2" />
            Launch Broadcast
          </button>
        </form>
      </div>
    </div>
    <Sidebar />
  </div>
</template>
