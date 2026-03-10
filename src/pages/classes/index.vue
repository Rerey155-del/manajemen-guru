<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { useClasses } from "@/composables/useClasses";

const { classes } = useClasses();
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
            Classrooms
          </h1>
          <p class="text-base-content/40 font-medium">
            Structural organization of students and capacity control.
          </p>
        </div>
        <div>
          <button
            class="btn btn-primary rounded-xl px-6 font-bold gap-2 shadow-lg shadow-primary/20 capitalize"
          >
            <i class="fas fa-plus text-sm"></i>
            Initialize Room
          </button>
        </div>
      </header>

      <!-- Classrooms Table -->
      <div
        class="bg-[#0f172a]/50 backdrop-blur-xl shadow-2xl border border-white/5 rounded-[2.5rem] overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table class="table table-lg w-full">
            <thead>
              <tr
                class="text-base-content/30 font-bold uppercase tracking-widest text-[10px] border-b border-white/5"
              >
                <th class="pl-12 py-8">Class Designation</th>
                <th class="py-8">Room ID</th>
                <th class="py-8">Utilization</th>
                <th class="pr-12 py-8 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="cls in classes"
                :key="cls.id"
                class="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td class="pl-12 py-10 font-bold text-lg text-white/90">
                  {{ cls.name }}
                </td>
                <td class="py-10 font-medium text-lg text-white/40">
                  {{ cls.roomId }}
                </td>
                <td class="py-10">
                  <div class="flex flex-col gap-2 w-48">
                    <div
                      class="flex justify-between text-xs font-bold text-white/90"
                    >
                      <span
                        >{{ cls.currentStudents }} /
                        {{ cls.capacity }} Students</span
                      >
                    </div>
                    <progress
                      class="progress progress-primary w-full h-1.5 bg-white/5"
                      :value="cls.currentStudents"
                      :max="cls.capacity"
                    ></progress>
                  </div>
                </td>
                <td class="pr-12 py-10 text-right">
                  <div
                    class="flex justify-end gap-4 opacity-40 hover:opacity-100 transition-opacity"
                  >
                    <button class="btn btn-ghost btn-sm btn-circle text-white">
                      <i class="fas fa-cog"></i>
                    </button>
                    <button class="btn btn-ghost btn-sm btn-circle text-white">
                      <i class="fas fa-users-cog"></i>
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
/* High performance scrolling */
.drawer-content {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--p) / 0.1) transparent;
}
</style>
