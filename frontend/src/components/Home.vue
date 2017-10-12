<template>
  <div>
    <Slider></Slider>
    <SiteHeader></SiteHeader>
    <div class="jumbotron" id="learn-more">
      <h1>World Class Cloud, Delivered.</h1>
      <br>
      <p class="lead">We build cost effective Serverless Web Applications.<br>We architect best-in-class Cloud IT Infrastructures.<br>We excel at fast, reliable, and efficient IT operations.<br>We maintain 24/7/365 IT Operations Support for clients around the globe.</p>
      <br>
      <p><a class="btn btn-lg btn-primary btn-slider-action" role="button" href="/about">Learn More...</a></p>
    </div>
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2 main-content" >
        <h2 class="text-center">EPX Labs, the go-to digital consultancy for implementing fast, simple, and reliable microservice (see: "serverless") strategies.</h2>
        <br>
        <br>
        <p>
          At EPX Labs, we show you how to cut through cloud complexity and deliver software at the speed of innovation.<br>No more security hassles, complicated deployments, or costly server management.
        </p>
        <p>
          We are your infrastructure and development advisors from ideation to live production support.
        </p>
        <p>
          EPX Labs leverages the latest cloud technology patterns like serverless computing, DevOps, and functional programming to deliver rock solid world class infrastructure without the added expense of hardware, datacenter costs, or costly single track IT staff.
        </p>
        <p>
          You can say goodbye to ongoing infrastructure management concerns: security updates, deployment automation, and production scaling - we handle that for you.
        </p>
      </div>
    </div>
    <ContactUs></ContactUs>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import Slider from './Slider'
import SiteHeader from './SiteHeader'
import ContactUs from './ContactUs'
import SiteFooter from './SiteFooter'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Slider,
    SiteHeader,
    ContactUs,
    SiteFooter
  }
}
</script>

<style>
div.main-content > p {
    font-size: 18px;
    font-weight: 100;
    line-height: 1.75;
    margin-bottom: 30px;
}
</style>
