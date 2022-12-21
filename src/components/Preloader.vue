<template>
  <transition name="preloader" v-on:after-leave="hide" v-on:after-enter="showed">
    <div class="preloader-wrapper z-40 preloader-wrapper--global" v-if="state">
      <div class="preloader">
        <div class="circle first-circle" />
        <div class="circle second-circle" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CirclePreloader',
  props: {
    state: {
      type: Boolean,
      required: true
    },
    zIndex: {
      type: Number,
    },
    fullScreen: {
      type: Boolean
    }
  },
  methods: {
    hide: function () {
      this.$emit('hide-preloader')
    },
    showed: function () {
      this.$emit('showed')
    }
  }
}
</script>
<style scoped>
.preloader-wrapper{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader {
  margin-right: auto;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  height: 100px;
  width: 100px;
  text-align: center;
}

.circle{
  width: 90px;
  height: 90px;
  border: 2px solid purple;
  border-radius: 50%;
  opacity: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
}
.first-circle{
  position: absolute;
  animation: preloader 1.5s infinite linear;
}

.second-circle{
  position: absolute;
  animation: preloader 1.5s infinite linear .8s;
}

.preloader-wrapper--global {
  position: fixed !important;
  inset: 0 !important;
}

.preloader-leave-active{
  animation: element-leave 1s;
}

.elements-list-fade-enter-active{
  animation: element-fade .7s;
}

@keyframes preloader{
  0%{opacity: .1; width: 91px; height: 91px;}
  25%{opacity: .8;}
  100%{opacity: 0; width: 0px; height: 0px;}
}

@keyframes element-leave{
  0%{opacity: 1;}
  100%{opacity: 0;}
}

@keyframes element-fade{
  0%{opacity: 0; margin-top: 40px;}
  100%{opacity: 1; margin-top: 0px;}
}

</style>
