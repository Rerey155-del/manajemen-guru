<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { Icon } from "@iconify/vue";
import { useClassStore } from "@/stores/useClassStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const store = useClassStore();
const router = useRouter();
const isSubmitting = ref(false);
const localError = ref<string | null>(null);

const form = ref({
  class_designation: "",
  room_id: "",
  utilization: "",
  status: "Active",
});

const goBack = () => {
  router.push('/classes');
};

const handleSubmit = async () => {
  localError.value = null;

  // Validation
  if (!form.value.class_designation.trim()) {
    localError.value = "Class designation is required";
    return;
  }
  if (!form.value.room_id.trim()) {
    localError.value = "Room ID is required";
    return;
  }
  if (!form.value.utilization.trim()) {
    localError.value = "Utilization is required";
    return;
  }

  try {
    isSubmitting.value = true;
    
    // Payload optimization
    const finalPayload = {
      ...form.value,
      class_designation: form.value.class_designation.trim(),
      room_id: form.value.room_id.trim(),
      utilization: form.value.utilization.trim()
    };

    await store.createItem(finalPayload);
    router.push('/classes');
  } catch (error: any) {
    localError.value = error.response?.data?.message || error.message || "Failed to initialize classroom";
    console.error("Add Class Error:", error);
  } finally {
    isSubmitting.value = false;
  }
};

const i18n = {
  brand: "SCHOOL",
  version: "V3",
  header: {
    title: "Initialize Room",
    subtitle: "Provide classroom utilization parameters."
  },
  actions: {
    back: "Back to List"
  }
};
</script>

<template>
  <div class="drawer lg:drawer-open bg-base-200 min-h-screen font-sans">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col p-6 lg:p-10">
      <header class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10" data-aos="fade-down">
        <div>
          <h1 class="text-4xl font-extrabold tracking-tight text-base-content mb-2">
            {{ i18n.header.title }}
          </h1>
          <p class="text-base-content/40 font-medium">
            {{ i18n.header.subtitle }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button @click="goBack" class="btn btn-ghost rounded-xl px-6 font-bold gap-2 capitalize">
            <Icon icon="lucide:arrow-left" class="text-sm" />
            {{ i18n.actions.back }}
          </button>
        </div>
      </header>

      <div class="bg-base-100 backdrop-blur-xl shadow-2xl border border-base-content/5 rounded-[2.5rem] p-8 max-w-3xl" data-aos="fade-up">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
          <!-- Error Message Display -->
          <div v-if="localError" class="alert alert-error rounded-xl shadow-sm py-3 mb-2 animate-in fade-in slide-in-from-top-4">
            <Icon icon="lucide:alert-circle" />
            <span class="text-sm font-semibold italic">{{ localError }}</span>
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text font-bold">Class Designation</span></label>
            <input v-model="form.class_designation" type="text" class="input input-bordered focus:border-primary rounded-xl" required placeholder="Grade 10A" />
          </div>
          <div class="form-control">
            <label class="label"><span class="label-text font-bold">Room ID</span></label>
            <input v-model="form.room_id" type="text" class="input input-bordered focus:border-primary rounded-xl" required placeholder="RM-101" />
          </div>
          <div class="form-control">
            <label class="label"><span class="label-text font-bold">Utilization (current/max)</span></label>
            <input v-model="form.utilization" type="text" class="input input-bordered focus:border-primary rounded-xl" required placeholder="30/40" />
          </div>
          <div class="form-control">
            <label class="label"><span class="label-text font-bold">Status</span></label>
            <select v-model="form.status" class="select select-bordered focus:border-primary rounded-xl" required>
              <option value="Active">Active</option>
              <option value="Non-Active">Non-Active</option>
            </select>
          </div>
          <div class="form-actions mt-6 flex justify-end gap-3">
            <button type="button" class="btn btn-ghost rounded-xl font-bold" @click="goBack" :disabled="isSubmitting">Cancel</button>
            <button type="submit" class="btn btn-primary rounded-xl font-bold px-8 shadow-lg shadow-primary/20" :disabled="isSubmitting">
              <span v-if="isSubmitting" class="loading loading-spinner loading-sm"></span>
              Initialize Classroom
            </button>
          </div>
        </form>
      </div>
    </div>
    <Sidebar />
  </div>
</template>
