<template>
  <div>
    <SiteHeader></SiteHeader>
    <div class="jumbotron">
      <h1>Cloud Apps need DevOps</h1>
    </div>

    <div class="row">
      <div class="main-content  col-md-8 col-md-offset-2">

        <p>
          The wide-spread adoption of the public cloud brought us many wonderful things and a few less than wonderful things. While it is simpler than ever to provision swarms of servers and unleash mountains of compute power on disparate datasets, there still seems to be a tremendous amount of complexity in the most basic mobile or web application.
        </p>

        <p>
          Think about your computer for a minute. How often do you check for viruses? How often do you run security updates? How often do you make sure that every single app running on your computer or phone is up to date?
        </p>

        <p>
          Unless you are a system administrator or you work in IT, you probably dont check those things very often. It takes time right?
        </p>

        <p>
          Well here’s the thing, what happens when your web app or mobile app backend API is running on a load balancer, 4 web servers, two database server instances, 2 caching servers, an elastic search cluster of at least a few nodes and so on?
        </p>

        <p>
          You are talking about keeping at least ten servers up to date with the latest security patches, software updates, automation scripts, and that doesn’t even include deployment infrastructure or scaling needs.
        </p>

        <p>
          Who is taking care of all those updates and all that complexity? And, if you are fortunate enough to do well and your app goes viral, can it scale up to meet demand? Is what you’re doing now at hundreds or thousands of users going to scale up to tens of thousands or millions of users?
        </p>

        <p>
          Those kinds of problems are what the DevOps philosophy is about. It’s about taking rock solid system administration principles couple with Site Reliability Engineering best practices and applying cutting edge agile software development techniques to automate all the complexity into a manageable system.
        </p>

        <p>
          Look, we understand that your eyes glaze over when you see an architecture diagram to visualize a complex infrastructure system. But, to truly operate at "web scale" on the cloud, you need to tame the complexity.
        </p>

        <p>
          At EPX Labs, we are experts and incorporate years of DevOps failures and successes to turn a tangled mess of cloud components and compute instances into a manageable system that scales effortlessly to meet your needs.
        </p>

        <p>
          Automating cloud management and deployments leveraging DevOps as a philosophy is a crucial IT objective in the current digital landscape. We will transfrom your IT infrastructure liabilities into valuable assets and a competitive advantage.
        </p>

        <p>
          We know that this stuff is hard. Everybody and their brother is claiming to do DevOps now whether they have experience or not. Yet, many of those projects go south in a flurry because it’s a lot more than running a couple software updates on a cron job.
        </p>

        <p>
          Real World Class Infrastructure requires the right combination of up front design, automation, and scalability from day one if you ever hope to truly leverage the power of the cloud.
        </p>

        <p>
          Our clients use our expertise to get the most out of their investment in the cloud and getting DevOps right is a core value we provide.
        </p>

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
  name: 'Devops',
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
div.foo > p {
  margin-bottom: 24px;
}

div.main-content > p {
  font-size: 18px;
  font-weight: 100;
  line-height: 1.75;
  margin-bottom: 30px;
}
</style>
