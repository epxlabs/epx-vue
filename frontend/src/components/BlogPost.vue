<template>
  <div>
    <SiteHeader></SiteHeader>
    <div class="row">
      <div class="blog-post">
        <h2/>
        <div class="col-md-8 col-md-offset-2">
          <div class="post-body" v-html='response'>
          </div>
          <div id="disqus_thread"></div>
        </div>
      </div>
    </div>
    <ContactUs></ContactUs>
    <SiteFooter></SiteFooter>
  </div>
</template>
<script>
import SiteHeader from './SiteHeader'
import ContactUs from './ContactUs'
import SiteFooter from './SiteFooter'
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
      var reader = new FileReader()
      reader.addEventListener('load', function () {
        self.response = marked(this.result)
      })
      reader.readAsText(response.bodyBlob)
    })
    // var title = this.$route.params.title + '.markdown'
    // var parser = new DOMParser()
    //  var doc = parser.parseFromString(txt, 'text/html')
  },
  components: {
    SiteHeader,
    ContactUs,
    SiteFooter
  }
}
</script>
