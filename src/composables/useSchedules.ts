import { ref } from 'vue'

export function useSchedules() {
  const schedules = ref([
    { id: 1, day: 'Monday', period_duration: '07:30 - 09:00', subject: 'Math Phase 1', instructor: 'Sarah Jones', class_name: 'X - Science A' },
    { id: 2, day: 'Monday', period_duration: '09:15 - 10:45', subject: 'Philosophy Intro', instructor: 'Marcus Aurelius', class_name: 'XII - Arts B' }
  ])

  const updateSchedule = async (id: number, data: any) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = schedules.value.findIndex(t => t.id === id);
    if (index !== -1) {
      schedules.value[index] = { ...schedules.value[index], ...data };
    }
  };

  return { schedules, updateSchedule }
}
