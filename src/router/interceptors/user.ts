import store from '@/store/'

export default function checkUser(to: { matched: any[] }, from: any, next: any) {
  const { state } = store

  if (to.matched.some(record => record.meta.requiresUser)) {
    if (state.user.id) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
}
