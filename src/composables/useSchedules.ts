import { ref } from 'vue'

export function useSchedules() {
  const schedules = ref([
    { id: 1, day: 'Monday', time: '07:30 - 09:00', subject: 'Math Phase 1', teacher: 'Sarah Jones', class: 'X - Science A' },
    { id: 2, day: 'Monday', time: '09:15 - 10:45', subject: 'Philosophy Intro', teacher: 'Marcus Aurelius', class: 'XII - Arts B' }
  ])

  return { schedules }
}
