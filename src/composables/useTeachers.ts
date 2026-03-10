import { ref } from 'vue'

export function useTeachers() {
  const teachers = ref([
    { id: 1, name: 'Sarah Jones, M.Pd', nip: '198801202022031001', department: 'Mathematics', status: 'Active' },
    { id: 2, name: 'Michael Chen, Ph.D', nip: '198505152021021002', department: 'Physics', status: 'Active' },
    { id: 3, name: 'Dewi Lestari, S.Si', nip: '199203102023011003', department: 'Biology', status: 'Active' },
    { id: 4, name: 'Robert Wilson, M.A', nip: '198011252018051004', department: 'English Literature', status: 'Suspended' }
  ])

  return { teachers }
}
