<template>
  <div>
    <vue-typed-js v-if="string" :strings="items" :fadeOut="true" :typeSpeed="100">
    <h1>ITのチカラで <span class="typing"></span>を...</h1>
    </vue-typed-js>
  </div>
</template>



<script>
import VueTypedJs from 'vue-typed-js'

export default {
  components: VueTypedJs,
  data () {
      return {
          items: [
            '便利',
            '豊かさ',
            '笑顔',
          ],
        string: "<h1></h1>"
      }
  },
}
</script>

<style>
.typed, .typed-cursor {
font-family: monospace, monospace;
color: white;
}
.typed-cursor {
opacity: 1;
-webkit-animation: blink 0.7s infinite;
-moz-animation: blink 0.7s infinite;
animation: blink 0.7s infinite;
}
@keyframes blink {
0% { opacity: 1; }
50% { opacity: 0; }
100% { opacity: 1; }
}
@-webkit-keyframes blink {
0% { opacity: 1; }
50% { opacity: 0; }
100% { opacity: 1; }
}
@-moz-keyframes blink {
0% { opacity: 1; }
50% { opacity: 0; }
100% { opacity: 1; }
}
</style>
