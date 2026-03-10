<script setup lang="ts">
// Sidebar component
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
          <i class="fas fa-columns w-5 text-center text-lg"></i>
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
          <i class="fas fa-chalkboard-teacher w-5 text-center"></i>
          <span>Teachers</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/students"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <i class="fas fa-user-graduate w-5 text-center"></i>
          <span>Students</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/subjects"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <i class="fas fa-book-open w-5 text-center"></i>
          <span>Subjects</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/classes"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <i class="fas fa-school w-5 text-center"></i>
          <span>Classes</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/schedules"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <i class="fas fa-calendar-alt w-5 text-center text-lg"></i>
          <span>Schedules</span>
        </router-link>
      </li>

      <li
        class="menu-title uppercase text-xs font-bold tracking-widest text-base-content/40 mt-6"
      >
        Administration
      </li>
      <li>
        <router-link
          to="/users"
          class="flex items-center gap-3 py-3"
          active-class="active bg-primary/10 text-primary font-bold"
        >
          <i class="fas fa-user-shield w-5 text-center"></i>
          <span>Users Management</span>
        </router-link>
      </li>

      <li class="mt-auto pt-6 border-t border-base-200">
        <a class="text-error flex items-center gap-3 py-3 hover:bg-error/10">
          <i class="fas fa-sign-out-alt w-5 text-center"></i>
          <span>Logout</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  @apply bg-primary/10 text-primary font-bold;
}
</style>
