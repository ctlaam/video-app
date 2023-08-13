import Cookies from 'js-cookie'
// middleware/auth.js

export default async function ({ store, redirect, route }) {
  const accessToken = Cookies.get('access_token')
  const refreshToken = Cookies.get('refresh_token')
  const userId = Cookies.get('user_id')
  if (accessToken && refreshToken && userId) {
    await store.dispatch('auth/login', {
      accessToken,
      refreshToken,
      userId,
    })
  }
  // Kiểm tra trạng thái xác thực isAuthenticated trong Vuex Store
  const isAuthenticated = store.state.auth.isAuthenticated
  // Nếu trạng thái isAuthenticated là false và route khác /auth và /auth/login
  if (
    !isAuthenticated &&
    route.path !== '/auth' &&
    route.path !== '/auth/signup'
  ) {
    // Chuyển hướng đến /auth/signup
    return redirect('/auth')
  }
}
