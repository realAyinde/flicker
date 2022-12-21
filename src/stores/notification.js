import { defineStore } from 'pinia'
import { NOTIFICATION_TIMEOUT } from '../constants' 

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notifications: [],
  }),
  actions: {
    parseNotification(text) {
      const time = NOTIFICATION_TIMEOUT
      const newNotification = { id: Date.now(), text, time }
      this.notifications.push(newNotification)
    },
    hideNotification(id) {
      const index = this.notifications.findIndex(i => i.id === id)
      if (index !== -1 && this.notifications[index]) {
        this.notifications.splice(index, 1)
      }
    }
  }
})
