<template>
  <div>
    <SiteHeader></SiteHeader>
    <div class="jumbotron">
      <h1>Node.js</h1>
    </div>

    <div class="row">
      <div class="main-content col-md-8 col-md-offset-2">
        <p>
          JavaScript is taking over the world.  Node.js is home to an ecosystem where more than a billion packages are downloaded per week.
        </p>
        <p>
          Running Node.js serverless in your organization brings: <br> <b> stability </b> (run your code in a cloud with built in multi-data center redundancy); <br> <b> speed </b> (low latency, reduced cold startup); <br> <b> elegance </b> (functions in JavaScript are the essential building block, Serverless brings them to scale) <br> <b> community </b> (no language community has embraced serverless like the JavaScript community); <br>
        </p>
        <p>
          JavaScript has true first-class functions and, as of EcmaScript 6, true classes.  We do our data heavy lifting in a functional style but create APIs that won't offend your object-oriented sensibilities (promise).
        </p>
        <p>
          Your organization is almost certainly already writing JavaScript.  We believe in embracing back-end JavaScript as a solution to real world problems.  We also believe you can blur the lines between back-end and front-end JavaScript via isomporhic (universal) JavaScript that runs the same code in both the backend and frontend.
        </p>
        <p>
          At EPX Labs, we love how easily Node.js fits into a solution that solves real business problems for our clients.  JavaScript's ubiquity and Node.js' tooling are unrivaled.  Let us be your expert on serverless / API gateway, promises, async / await, linting (static analysis), ES6 / 7, functional JavaScript, unit / integration testing, isomorphic JavaScript, and partner with a group that is closely monitoring the Node.js and JavaScript universe.
        </p>
        <p>
          Node.js provides our clients with tools that, when combined with the right people, yield great productivity, speed, and stability for the lifetime of their projects.
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
  name: 'NodeJS',
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
