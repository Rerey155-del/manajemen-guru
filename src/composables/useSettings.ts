import { ref } from 'vue'

export function useSettings() {
  const profile = ref({
    username: 'admin_sarah',
    password: 'password123'
  })

  const preferences = ref({
    darkMode: true
  })

  const security = ref({
    lastPasswordChange: '30 hari yang lalu'
  })

  const updateProfile = () => {
    console.log('Profile updated', profile.value)
    // Add toast notification logic here
  }

  const changePassword = () => {
    console.log('Redirecting to change password...')
  }

  return {
    profile,
    preferences,
    security,
    updateProfile,
    changePassword
  }
}
