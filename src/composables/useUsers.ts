import { ref } from 'vue'

export function useUsers() {
  const users = ref([
    { 
      id: 1, 
      full_name: 'Super Administrator', 
      username: 'root_admin', 
      email: 'admin@school.v3', 
      role: 'Super Admin', 
      status: 'Active',
      last_login: '2023-10-25 08:30:00'
    },
    { 
      id: 2, 
      full_name: 'Academic Staff', 
      username: 'staff_acad', 
      email: 'staff@school.v3', 
      role: 'Management', 
      status: 'Active',
      last_login: '2023-10-24 14:15:00'
    },
    { 
      id: 3, 
      full_name: 'IT Support', 
      username: 'it_support', 
      email: 'it@school.v3', 
      role: 'Staff', 
      status: 'Suspended',
      last_login: '2023-09-12 10:05:00'
    }
  ])

  const updateUser = async (id: number, data: any) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = users.value.findIndex(t => t.id === id);
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...data };
    }
  };

  return { users, updateUser }
}
