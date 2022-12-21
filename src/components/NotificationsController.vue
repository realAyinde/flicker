<template >
  <div class="notification-controller fixed z-50 bottom-0 right-0 p-7">
    <TransitionGroup name="list">
      <div v-for="notification in notifications" class="mt-2" :key="notification.id">
        <Notification
          :text="notification.text"
          :id="notification.id"
          :time="notification.time"
        /> 
      </div>
    </TransitionGroup>
  </div>
</template>
<script>
import Notification from './Notification.vue'
import { mapState, mapActions } from 'pinia'
import { useNotificationStore } from '../stores/notification'

export default {
  components: {
    Notification,
  },
  computed: {
    ...mapState(useNotificationStore, ['notifications'])
  },
}
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>