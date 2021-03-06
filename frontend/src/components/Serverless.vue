<template>
  <div>
    <SiteHeader></SiteHeader>
    <div class="jumbotron">
      <h1>Imagine a World Without Servers...</h1>
    </div>

    <div class="row">
      <div class="main-content col-md-8 col-md-offset-2" >
        <p>That is one way to think about serverless technologies like AWS Lambda. It doesn’t mean that servers no longer exist. </p>

        <p>Instead, you are no longer limited by thinking in terms of servers, operating systems, processes, RAM, patches, updates, and all those infrastructure headaches of the past. No longer do you need to orchestrate a fleet of servers in perfect unison to achieve scalability in the cloud.</p>

        <p>With the rise of the serverless way of thinking you have the relatively infinite capacity of Amazon Web Services at your fingertips. Remember, this is the same technology that powers worldwide web scale services at Netflix. The difference? You do not have to worry about the configuration and management overhead of running your own virtualized server fleet.</p>

        <p>One of the most important principles of good infrastructure management is that simplicity beats complexity.</p>

        <p>AWS Lambda and the other cloud platforms bring simplicity to your infrastructure.</p>

        <p>In a serverless world your code is treated more like a discrete program executing on a giant computer rathen than a bunch of computers disparately running your code. What we mean is, you don’t worry about how many EC2 instances are running your code, you don’t worry if those instances have enough memory or compute power, you don’t worry about operating systems, patches, configuration scripts or any of that.</p>

        <p>Lambdas and cloud functions act as a kind of distributed cloud operating system where your code executes when it is needed and shuts down. Just like if you ran a program on your laptop. You start the program, it runs, and it closes. </p>

        <p>AWS Lambda does that for you automatically whenever your code needs to run.</p>

        <p>You are only charged when the code runs.</p>

        <p>Because of this radically different operations model the cost savings of running a AWS Lambda or cloud function based system is dramatic. We have seen well designed IT infrastructure and cloud costs cut by 80% over traditional AWS EC2 backed system. </p>

        <p>Much of the cost savings stems from the "automatic kill switch" of AWS Lambda without any run-time planning or swarm configuration. With enough automation some companies have achieved similar results on Amazon EC2.. BUT there is a big problem with the traditional autoscaling automation approach...</p>

        <p align="center">It <br> is <br> too <br> complicated.</p>

        <p>And because it’s complicated very few teams leveraging the cloud are able to scale up and down based on instantaneous demand.</p>

        <p>Instead, many companies will over-provision their servers by two or four times what capacity dictates because “servers are cheap” and “people are expensive”. To some extent, this is true. </p>

        <p>It’s also wasteful.</p>

        <p>We believe World Class Infrastructure is efficient and for the time being AWS Lambda is the most efficient cloud service for taking advantage of serverless design patterns.</p>

        <p>Our clients are already migrating parts or all of their systems to a serverless pattern and the results are stunning. Infrastructure costs drop dramatically, as much as 80%! Better than that, the complexity of running their infrastructure seems to vanish.</p>

        <p>At EPX Labs, we are on the cutting edge of serverless technology and design patterns. Let us show you some savings and save you some headaches. </p>

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
  name: 'Serverless',
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

<style>
div.main-content > p {
  font-size: 18px;
  font-weight: 100;
  line-height: 1.75;
  margin-bottom: 30px;
}
</style>
