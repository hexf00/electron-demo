import * as api from '@/api'

export async function getUser(username: string) {
  return api.getUser(username)
}

export async function getExampleList(param: { filter: Record<string, any> ; page: Record<string, any> }) {
  const TYPES: Record<string, any> = {
    1: '个人',
    2: '组织'
  }

  const STATUS: Record<string, any> = {
    0: '离线',
    1: '在线'
  }

  return api.getExampleList(param).then((data: { list: { type: number; status: string | number }[] }) => {
    return {
      ...data,
      list: data.list.map((item: { type: number; status: string | number }) => {
        return {
          ...item,
          typeText: TYPES[item.type],
          statusText: STATUS[item.status]
        }
      })
    }
  })
}
