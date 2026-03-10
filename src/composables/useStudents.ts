import { ref } from 'vue'

export function useStudents() {
  const students = ref([
    { id: 1, name: 'Alice Thompson', nis: '20231001', gender: 'Female', class_name: 'X - Science A', enrollment_status: 'Active' },
    { id: 2, name: 'Budi Santoso', nis: '20231002', gender: 'Male', class_name: 'X - Science A', enrollment_status: 'Active' },
    { id: 3, name: 'Catherine Low', nis: '20231003', gender: 'Female', class_name: 'XI - Social B', enrollment_status: 'Active' },
    { id: 4, name: 'David Smith', nis: '20231004', gender: 'Male', class_name: 'XII - Arts B', enrollment_status: 'Graduated' }
  ])

  return { students }
}
