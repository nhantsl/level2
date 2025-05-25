import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    dummyUser: null,
    cardNumber: 0,
  }),

  getters: {
    username: (state) => state.user?.username || '',
    userImage: (state) => state.user?.image || '',
    cardNumberDisplay: (state) => state.cardNumber || 'Chưa có',
  },

  actions: {
    setUser(userData) {
      this.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },

    loadUserFromLocalStorage() {
      const saved = localStorage.getItem('user')
      if (saved) {
        this.user = JSON.parse(saved)
      }
    },

    async fetchDummyUserById(id) {
      try {
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json()
        this.dummyUser = data.users.find(u => u.id === id) || null
      } catch (error) {
        console.error('Lỗi khi lấy dummy user:', error)
        this.dummyUser = null
      }
    },

    async initUser() {
      this.loadUserFromLocalStorage()

      if (this.user) {
        await this.fetchDummyUserById(this.user.id)

        if (this.dummyUser?.bank?.cardNumber) {
          this.cardNumber = Number(this.dummyUser.bank.cardNumber)
        } else {
          this.cardNumber = this.user.bank?.cardNumber || 0
        }
      }
    },

    register(payload) {
      const newUser = {
        ...payload,
        id: Date.now(),
        bank: {
          cardNumber: Date.now(),
        },
      }
      this.setUser(newUser)
    }
  }
})
