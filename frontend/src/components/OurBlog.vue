<template>
  <section id="blog" class="section section-no-border mb-none">
  <div class="container">
    <div class="row">
      <div class="col-md-12 center">
        <h2 class="heading-dark-inverse">Our <strong>Blog</strong></h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="recent-posts mt-xl">
          <article class="post">
            <div class="date">
              <span class="day">15</span>
              <span class="month">Jan</span>
            </div>
            <h4><a>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat libero.</p>
            <a class="btn btn-borders btn-primary mt-md mb-xl">Read More</a>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>
</template>



<script>
export default {
  name: 'OurBlog',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
