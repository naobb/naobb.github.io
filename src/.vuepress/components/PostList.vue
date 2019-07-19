<template>
    <div id="content" class="cf">
        <div v-for="post in posts" class="card">
          <div class="card-body">
            <h2 class="card-title"><a v-bind:href="post.path">{{post.title}}</a></h2>
            <p></p>
            <small>{{post.frontmatter.date || dateFormatter}}</small>
            <a v-bind:href="post.path" id="more">続きを読む</a>
          </div>
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
  /* float: both; */
  width: 690px;
  margin-bottom: 30px;

}

.card {
  width: 33%;
  height: 120px;
  margin-top: 1rem;
  margin-right: 1rem;
  /* margin-bottom: 10px; */
  float: left;
  position: relative
}

h2>a{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cf::after {
  content: "";
  display: block;
  clear: both;
}
</style>
