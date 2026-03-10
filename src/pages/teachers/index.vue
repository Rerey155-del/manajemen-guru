<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { useTeachers } from "@/composables/useTeachers";

const { teachers } = useTeachers();
</script>

<template>
  <div class="drawer lg:drawer-open bg-base-200 min-h-screen font-sans">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col p-6 lg:p-10">
      <!-- Mobile Navbar Toggle -->
      <div
        class="flex items-center justify-between lg:hidden mb-6 bg-base-100 p-4 rounded-2xl shadow-sm"
      >
        <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button">
          <i class="fas fa-bars text-xl"></i>
        </label>
        <span class="text-xl font-bold tracking-tight"
          >SCHOOL<span class="text-primary">V3</span></span
        >
        <div class="avatar w-8 h-8 rounded-full overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" />
        </div>
      </div>

      <!-- Header Section -->
      <header
        class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10"
      >
        <div>
          <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2">
            Teachers Directory
          </h1>
          <p class="text-base-content/40 font-medium">
            Managing academic faculty and professional credentials.
          </p>
        </div>
        <div>
          <button
            class="btn btn-primary rounded-xl px-6 font-bold gap-2 shadow-lg shadow-primary/20 capitalize"
          >
            <i class="fas fa-user-plus text-sm"></i>
            Onboard Teacher
          </button>
        </div>
      </header>

      <!-- Teachers Table -->
      <div
        class="bg-[#0f172a]/50 backdrop-blur-xl shadow-2xl border border-white/5 rounded-[2.5rem] overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table class="table table-lg w-full">
            <thead>
              <tr
                class="text-base-content/30 font-bold uppercase tracking-widest text-[10px] border-b border-white/5"
              >
                <th class="pl-12 py-8">Full Name</th>
                <th class="py-8">NIP / NIK</th>
                <th class="py-8">Department</th>
                <th class="py-8">Status</th>
                <th class="pr-12 py-8 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="teacher in teachers"
                :key="teacher.id"
                class="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td class="pl-12 py-10">
                  <div class="flex items-center gap-4">
                    <div class="avatar placeholder">
                      <div
                        class="bg-primary/10 text-primary font-black rounded-xl w-10 shadow-sm border border-primary/20 uppercase"
                      >
                        <span
                          >{{ teacher.name.split(" ")[0][0]
                          }}{{
                            teacher.name.split(" ")[1]
                              ? teacher.name.split(" ")[1][0]
                              : ""
                          }}</span
                        >
                      </div>
                    </div>
                    <span class="font-bold text-lg text-white/90">{{
                      teacher.name
                    }}</span>
                  </div>
                </td>
                <td
                  class="py-10 font-bold text-lg text-white/40 font-mono tracking-tighter"
                >
                  {{ teacher.nip }}
                </td>
                <td class="py-10 font-medium text-lg text-white/70">
                  {{ teacher.department }}
                </td>
                <td class="py-10">
                  <span
                    :class="`badge badge-sm font-black uppercase text-[10px] p-2 h-auto ${
                      teacher.status === 'Active'
                        ? 'badge-success shadow-lg shadow-success/20'
                        : 'badge-ghost opacity-40'
                    }`"
                  >
                    {{ teacher.status }}
                  </span>
                </td>
                <td class="pr-12 py-10 text-right">
                  <div
                    class="flex justify-end gap-3 opacity-40 hover:opacity-100 transition-opacity"
                  >
                    <button class="btn btn-ghost btn-sm btn-circle text-white">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-ghost btn-sm btn-circle text-white">
                      <i class="fas fa-id-card"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Sidebar Component -->
    <Sidebar />
  </div>
</template>

<style scoped>
.drawer-content {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--p) / 0.1) transparent;
}
</style>
