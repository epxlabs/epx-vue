<template>
  <div class="row">
  <div class="blog-post">
    <h2/>
    <div class="col-md-8 col-md-offset-2">
    <div class="post-body" v-html='response'>
    </div>
  </div>
  </div>
</div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'BlogPost',
  data () {
    return {
      response: null
    }
  },
  mounted () {
    var self = this
    var marked = require('marked')
    var title = '/static/blog_posts/' + this.$route.params.title + '.markdown'
    this.title = title
    this.$http.get(title).then((response) => {
      self.response = marked(response.body)
      var code = self.$el.querySelector('code')
      console.log(code)
      // var title = this.$route.params.title + '.markdown'
      // var parser = new DOMParser()
      //  var doc = parser.parseFromString(txt, 'text/html')
    })
  },
  components: {
    VueMarkdown
  }
}
</script>
