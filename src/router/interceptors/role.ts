import store from '@/store'

export default function checkRoles(to: Record<string, any>, from: any, next: any) {
  const { state } = store
  const { requiresRole } = to.meta

  if (!requiresRole) {
    next()
  } else {
    if (!state.user.id) {
      next('/login')
    } else {
      const { roles = [] as Record<string, any>[] } = state.user
      if (roles.indexOf(requiresRole) > -1) {
        next()
      } else {
        next('/403')
      }
    }
  }
}
