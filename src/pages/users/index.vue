<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { useUsers } from "@/composables/useUsers";

const { users } = useUsers();
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
            System Administrators
          </h1>
          <p class="text-base-content/40 font-medium">
            Manage administrative access levels and security protocols.
          </p>
        </div>
        <div>
          <button
            class="btn btn-primary rounded-xl px-6 font-bold gap-2 shadow-lg shadow-primary/20 capitalize"
          >
            <i class="fas fa-user-shield text-sm"></i>
            Add Administrator
          </button>
        </div>
      </header>

      <!-- Users Table -->
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
                <th class="py-8">Username / Email</th>
                <th class="py-8">Role</th>
                <th class="py-8">Status</th>
                <th class="pr-12 py-8 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="user in users"
                :key="user.id"
                class="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td class="pl-12 py-10 font-bold text-lg text-white/90">
                  {{ user.full_name }}
                </td>
                <td class="py-10 flex flex-col">
                  <span
                    class="font-bold text-white/40 font-mono tracking-tighter"
                    >{{ user.username }}</span
                  >
                  <span class="text-xs text-white/20 font-medium">{{
                    user.email
                  }}</span>
                </td>
                <td class="py-10">
                  <span
                    class="px-4 py-1.5 bg-white/5 text-white/70 rounded-lg text-xs font-bold border border-white/5"
                  >
                    {{ user.role }}
                  </span>
                </td>
                <td class="py-10">
                  <span
                    :class="`badge badge-sm font-black uppercase text-[10px] p-2 h-auto ${
                      user.status === 'Active'
                        ? 'badge-success shadow-lg shadow-success/20'
                        : 'badge-ghost opacity-40'
                    }`"
                  >
                    {{ user.status }}
                  </span>
                </td>
                <td class="pr-12 py-10 text-right">
                  <div
                    class="flex justify-end gap-3 opacity-40 hover:opacity-100 transition-opacity text-white"
                  >
                    <button class="btn btn-ghost btn-sm btn-circle">
                      <i class="fas fa-key text-xs opacity-50"></i>
                    </button>
                    <button class="btn btn-ghost btn-sm btn-circle">
                      <i class="fas fa-edit"></i>
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
