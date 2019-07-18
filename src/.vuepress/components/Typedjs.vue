<template>
  <div>
    <vue-typed-js v-if="string" :strings="items">
    <p>My favourite city is <span class="typing"></span></p>
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
            'Ealing',
            'Kilmarnock',
            'Newport',
            'Kensington',
            '...', 
            'Dagenham',
            'Liverpool',
            'Saint Helens',
            'Knowsley'
          ],
        string: "<h1></h1>"
      }
  },
}
</script>
