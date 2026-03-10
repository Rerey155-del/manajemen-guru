import { ref } from 'vue'

export function useUsers() {
  const users = ref([
    { 
      id: 1, 
      full_name: 'Super Administrator', 
      username: 'root_admin', 
      email: 'admin@school.v3', 
      role: 'Super Admin', 
      status: 'Active' 
    },
    { 
      id: 2, 
      full_name: 'Academic Staff', 
      username: 'staff_acad', 
      email: 'staff@school.v3', 
      role: 'Management', 
      status: 'Active' 
    },
    { 
      id: 3, 
      full_name: 'IT Support', 
      username: 'it_support', 
      email: 'it@school.v3', 
      role: 'Staff', 
      status: 'Suspended' 
    }
  ])

  return { users }
}
