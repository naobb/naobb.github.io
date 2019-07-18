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
  components: { VueElementLoading },
}
</script>
