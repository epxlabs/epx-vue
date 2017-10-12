<template>
  <div>
  <SiteHeader></SiteHeader>
  <section id="identity" class="section section-secondary section-no-border mb-none">
  <div class="container">
    <div class="row mb-xl">
      <div class="col-md-12 center">
        <h2 class="mb-xl"><strong>Who</strong> We Are</h2>
        <p class="multi-line"></p>
        <!-- <a class="btn btn-borders btn-default mr-xs mb-sm">Read More</a> -->
      </div>
    </div>
  </div>
</section>
<ContactUs></ContactUs>
<SiteFooter></SiteFooter>
</div>
</template>



<script>
import SiteHeader from './SiteHeader'
import ContactUs from './ContactUs'
import SiteFooter from './SiteFooter'

export default {
  name: 'WhoWeAre',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    SiteHeader,
    ContactUs,
    SiteFooter
  }
}
</script>
