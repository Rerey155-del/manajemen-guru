import { ref, computed } from 'vue'

const user = ref(JSON.parse(localStorage.getItem('user') || 'null'))

export function useAuth() {
  const isAuthenticated = computed(() => !!user.value)

  const login = (credentials: { username: string; token: string }) => {
    // Simple mock login logic
    const userData = {
      username: credentials.username,
      role: 'Administrator',
      email: `${credentials.username}@school.ac.id`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.username}`
    }
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
    return true
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
}
