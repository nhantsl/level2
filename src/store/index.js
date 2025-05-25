import { createPinia } from 'pinia'
import { useUserStore } from './modules/user'

export const pinia = createPinia()

// Export tất cả các store để dùng chung
export {
  useUserStore,
}
