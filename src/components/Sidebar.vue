<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useAuth } from "@/composables/useAuth";
import { useRouter } from "vue-router";

const { logout } = useAuth();
const router = useRouter();

const handleLogout = () => {
  logout();
  router.push("/login");
};
</script>

<template>
  <div class="drawer-side z-50">
    <label
      for="my-drawer-2"
      aria-label="close sidebar"
      class="drawer-overlay"
    ></label>
    <ul
      class="menu p-4 w-72 min-h-full bg-base-100 text-base-content gap-2 border-r border-base-200"
    >
      <!-- Logo -->
      <li class="mb-6 px-4 py-2">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 bg-primary text-primary-content flex items-center justify-center rounded-xl font-black text-xl shadow-lg shadow-primary/20"
          >
            S
          </div>
          <span class="text-2xl font-black tracking-tight"
            >SCHOOL<span class="text-primary">V3</span></span
          >
        </div>
      </li>

      <li
        class="menu-title uppercase text-xs font-bold tracking-widest text-base-content/40 mt-2"
      >
        Main Menu
      </li>
      <li>
        <router-link
          to="/"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <Icon icon="lucide:layout-dashboard" class="w-5 h-5" />
          <span>Dashboard</span>
        </router-link>
      </li>

      <li
        class="menu-title uppercase text-xs font-bold tracking-widest text-base-content/40 mt-6"
      >
        Academic Center
      </li>
      <li>
        <router-link
          to="/teachers"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <Icon icon="lucide:users" class="w-5 h-5" />
          <span>Teachers</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/students"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <Icon icon="lucide:graduation-cap" class="w-5 h-5" />
          <span>Students</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/subjects"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <Icon icon="lucide:book-open" class="w-5 h-5" />
          <span>Subjects</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/classes"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <Icon icon="lucide:school" class="w-5 h-5" />
          <span>Classes</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/schedules"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <Icon icon="lucide:calendar" class="w-5 h-5" />
          <span>Schedules</span>
        </router-link>
      </li>

      <li
        class="menu-title uppercase text-xs font-bold tracking-widest text-base-content/40 mt-6"
      >
        System & Preferences
      </li>
      <li>
        <router-link
          to="/settings"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <Icon icon="lucide:settings" class="w-5 h-5" />
          <span>Settings</span>
        </router-link>
      </li>

      <li class="mt-auto pt-6 border-t border-base-200">
        <button
          @click="handleLogout"
          class="btn btn-ghost text-error flex items-center justify-start gap-3 py-3 hover:bg-error/10 w-full px-4 rounded-xl"
        >
          <Icon icon="lucide:log-out" class="w-5 h-5" />
          <span>Logout</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  @apply bg-primary/10 text-primary font-bold;
}
</style>
