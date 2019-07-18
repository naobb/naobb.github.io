<template>
<div>
<vue-element-loading :active="show" spinner="spinner" color="#FF6700" is-full-screen/>
</div>
</template>

<script>
import VueElementLoading from 'vue-element-loading'

export default {
  data() {
    return {
      show: true
    }
  },
  created () {
    setTimeout(() => { this.show = false }, 500)
  },
  components: { VueElementLoading },
}
</script>
