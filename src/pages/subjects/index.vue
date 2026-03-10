<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { useSubjects } from "@/composables/useSubjects";

const { subjects } = useSubjects();
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
            Academic Subjects
          </h1>
          <p class="text-base-content/40 font-medium">
            Curriculum management for all grades and specialization.
          </p>
        </div>
        <div>
          <button
            class="btn btn-primary rounded-xl px-6 font-bold gap-2 shadow-lg shadow-primary/20 capitalize"
          >
            <i class="fas fa-plus text-sm"></i>
            Define New Subject
          </button>
        </div>
      </header>

      <!-- Subjects Table -->
      <div
        class="bg-[#0f172a]/50 backdrop-blur-xl shadow-2xl border border-white/5 rounded-[2.5rem] overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table class="table table-lg w-full">
            <thead>
              <tr
                class="text-base-content/30 font-bold uppercase tracking-widest text-[10px] border-b border-white/5"
              >
                <th class="pl-12 py-8">Subject Name</th>
                <th class="py-8">Academic Code</th>
                <th class="py-8">Metadata</th>
                <th class="pr-12 py-8 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="sub in subjects"
                :key="sub.id"
                class="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td class="pl-12 py-10 font-bold text-lg text-[#6366f1]">
                  {{ sub.name }}
                </td>
                <td
                  class="py-10 font-bold text-lg text-white/40 font-mono tracking-tighter"
                >
                  {{ sub.code }}
                </td>
                <td class="py-10">
                  <div class="flex gap-2">
                    <span
                      v-for="tag in sub.tags"
                      :key="tag"
                      class="px-4 py-1.5 bg-white/5 text-white/40 rounded-lg text-[10px] font-bold border border-white/5"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </td>
                <td class="pr-12 py-10 text-right">
                  <div class="flex justify-end gap-4">
                    <button
                      class="btn btn-ghost btn-sm btn-circle text-white/40 hover:text-white transition-colors"
                    >
                      <i class="fas fa-sliders-h"></i>
                    </button>
                    <button
                      class="btn btn-ghost btn-sm btn-circle text-error/40 hover:text-error transition-colors"
                    >
                      <i class="fas fa-trash"></i>
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
