import * as service from '@/services'

export const example = {
  namespaced: true,
  state: {
    loading: true,
    exampleList: {
      page: {
        order: 'descending',
        orderBy: 'id',
        pageNo: 1,
        pageSize: 20,
        total: 0
      },
      list: []
    }
  },
  mutations: {
    loading(state: { loading: any }, loading: any) {
      state.loading = loading
    },

    search(state: { exampleList: any }, payload: { data: any }) {
      state.exampleList = payload.data
    }
  },
  actions: {
    async searchExampleList({ commit }: any, param: { filter: Record<string, any>; page: Record<string, any> }) {
      commit('loading', true)

      try {
        const data = await service.getExampleList(param)

        commit({
          type: 'search',
          data
        })
      } catch (err) {
        throw err
      } finally {
        commit('loading', false)
      }
    }
  }
}

export default example
