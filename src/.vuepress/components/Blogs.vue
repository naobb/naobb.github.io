<template>
  <div>
    <div v-for="post in posts">
    <a href="post.path">{{post.title}}</a>
    </div>
  </div>
</template>

<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(page => page.type === 'post');
            }
        }
    }
</script>