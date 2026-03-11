import apiClient from './apiClient';

export interface UserType {
  id?: number | string;
  username: string;
  email?: string;
  role?: string;
  avatar?: string;
  name?: string;
}

export const authService = {

  async login(credentials: { username: string; password?: string }): Promise<{ user: UserType, token: string }> {
    try {

      const usersResponse = await apiClient.get('/users');
      const users: UserType[] = usersResponse.data;

      const matchedUser = users.find(u => u.username === credentials.username);

      if (matchedUser) {
        return {
          user: {
            ...matchedUser,
            role: matchedUser.role || 'Administrator',
            avatar: matchedUser.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${matchedUser.username}`
          },
          // Mock token, ganti dengan token dari API jika /users me-return token
          token: 'mock-token-from-users-table'
        };
      } else {
        throw new Error('User not found in /users table');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  }
};
