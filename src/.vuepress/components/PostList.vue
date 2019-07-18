<template>
    <div id="content">
        <div v-for="post in posts" class="card card-body">
            <h2 class="card-title"><a v-bind:href="post.path">{{post.title}}</a></h2>
            <small>{{post.frontmatter.date || dateFormatter}}</small>
            <a v-bind:href="post.path" id="more">続きを読む</a>
        </div>
    </div>
</template>
<script>
import format from 'date-fns/format'
export default {
    computed: {
        posts() {
        return this.$site.pages
            // blogディレクトリ以下を投稿記事一覧表示の対象とする
            .filter(post => post.path.startsWith('/blog/'))
            // dateに設定した日付の降順にソートする
            .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    },
     filters: {
    dateFormatter: function (date) {
      return format(date, 'YYYY/MM/DD')
    }
  }
}
</script>

<style>
#content {
  float: both;
  width: 600px;
}
#more {
  display: block;
  float: right;
}

.card {
  width: 35%;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  float: left;
}
</style>
