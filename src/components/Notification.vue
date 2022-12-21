<template>
  <div class="py-2 pl-7 pr-14 relative rounded-md shadow-lg bg-purple-600 ">
    <div class="absolute right-[5px] top-[5px] p-[5px] hover:opacity-80 hover:cursor-pointer" @click.stop="hideNotification(id)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><g><path fill="#ffffff" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1.414-8.828a1 1 0 0 1 1.414 1.414L9.414 8l1.414 1.414a1 1 0 0 1-1.414 1.414L8 9.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L6.586 8 5.172 6.586a1 1 0 0 1 1.414-1.414L8 6.586z"/></g></g></svg>
    </div>
    <div class="text-white text-sm">{{ text }}</div>
  </div>
</template>
<script>
import { mapActions } from 'pinia'
import { useNotificationStore } from '../stores/notification'
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions(useNotificationStore, { hideNotification: 'hideNotification' }),
  },
  mounted() {
    setTimeout(() => {
      this.hideNotification(this.id)
    }, this.time)
  }
}
</script>