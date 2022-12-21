<template>
  <div class="relative ml-8">
    <input 
      class="py-0 pr-10 pl-5 w-[320px] h-9 rounded-3xl border-[1px] border-[#e9e8e8] outline-none bg-white text-base"
      type="text" placeholder="Search" spellcheck="false" v-model="modelState" v-bind="$attrs" v-on="inputListeners" />
    <svg class="absolute top-[calc(50%-8px)] right-5" width="16" height="16" viewBox="0 0 16 16">
      <defs>
        <path
          id="or4ya"
          d="M1201 61a7 7 0 1 1 5.606-2.808l2.93 2.93a1 1 0 0 1-1.415 1.414l-2.929-2.93A6.969 6.969 0 0 1 1201 61zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
        />
      </defs>
      <g>
        <g transform="translate(-1194 -47)">
          <use fill="#918f8f" xlink:href="#or4ya" />
        </g>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      modelState: ''
    }
  },
  computed: {
    inputListeners: function () {
      const vm = this
      return Object.assign({},
        vm.$listeners,
        // This ensures that the component works with v-model
        {
          input: (e) => vm.onUpdate(e, 'input'),
          change: (e) => vm.onUpdate(e, 'change'),
        },
      )
    },
  },
  watch: {
    modelState: {
      immediate: true,
      handler(val) {
        this.modelState = val
      }
    }
  },
  methods: {
    onUpdate(e, type = 'both') {
      this.modelState = e.target.value;
      (type === 'both' || type === 'input') && this.$emit('input', this.modelState);
      (type === 'both' || type === 'change') && this.$emit('change', this.modelState);
    }
  }
}
</script>