<template>
  <div class="relative">
    <transition name="notification-fade">
      <div class="fixed z-50 w-fit bottom-0 right-0 p-7">
        <div class="py-2 pl-7 pr-14 relative rounded-md shadow-lg bg-green-600 ">
          <div class="absolute right-[5px] top-[5px] p-[5px] hover:opacity-80 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><g><path fill="#ffffff" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1.414-8.828a1 1 0 0 1 1.414 1.414L9.414 8l1.414 1.414a1 1 0 0 1-1.414 1.414L8 9.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L6.586 8 5.172 6.586a1 1 0 0 1 1.414-1.414L8 6.586z"/></g></g></svg>
          </div>
          <div class="text-white">Product already exists inside the cart.</div>
          <!-- <div class="text-white">Sorry, an error occurs from our side while adding your product to the cart, we are currently working on it, Kindly try again.</div> -->
        </div>
      </div>
    </transition>
  </div>
</template>
<style scoped>

.notification-fade-enter-active{
  animation-name: notification-fade;
  animation-duration: 1s;
}

.notification-fade-leave-active{
  animation-name: notification-fade;
  animation-duration: 1s;
  animation-direction: reverse;
}

.follow-tip-notification-fade-enter-active{
  animation-name: notification-fade;
  animation-duration: .5s;
}

.follow-tip-notification-fade-leave-active{
  animation-name: notification-fade;
  animation-duration: .1s;
  animation-direction: reverse;
}
@keyframes notification-fade{
  0% {opacity: 0}
  100% {opacity: 1}
}

</style>