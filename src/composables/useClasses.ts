import { ref } from 'vue'

export function useClasses() {
  const classes = ref([
    { 
      id: 1, 
      name: 'X - Science A', 
      roomId: 'BLOCK-A-102', 
      currentStudents: 32, 
      capacity: 35 
    },
    { 
      id: 2, 
      name: 'XII - Arts B', 
      roomId: 'BLOCK-C-004', 
      currentStudents: 18, 
      capacity: 25 
    }
  ])

  return { classes }
}
