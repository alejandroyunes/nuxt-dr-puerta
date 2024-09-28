import { defineStore } from 'pinia'

type Theme = {
  theme: string;
}

export const themeList: Theme[] = [
  { theme: 'light' },
  { theme: 'dark' },
]

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      theme: themeList[0]
    }
  },
  actions: {
    setTheme(theme: Theme) {      
      this.theme = theme
    },
  },
  getters: {
    getTheme: (state) => state.theme
  }
})