import { ref } from 'vue'

export function useClasses() {
  const classes = ref([
    { 
      id: 1, 
      class_designation: 'X - Science A', 
      room_id: 'BLOCK-A-102', 
      utilization: '32/35'
    },
    { 
      id: 2, 
      class_designation: 'XII - Arts B', 
      room_id: 'BLOCK-C-004', 
      utilization: '18/25'
    }
  ])

  const updateClass = async (id: number, data: any) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = classes.value.findIndex(t => t.id === id);
    if (index !== -1) {
      classes.value[index] = { ...classes.value[index], ...data };
    }
  };

  return { classes, updateClass }
}
