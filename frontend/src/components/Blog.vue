<template>
  <div>
    <SiteHeader></SiteHeader>
    <div class='row'>
      <div class='col-md-8 col-md-offset-2'>
        <br>
        <h2>Latest Articles</h2>
        <div class='articles' v-for='post in posts'>
          <div class='article'>
            <img class='resize' :src='post.image'>
            <h3><a :href='"/blog/" + post.url' class='blog-link'>{{post.title}}</a></h3>
            <h5 class='author'><i>{{post.author + ' - ' + post.date}}</i></h5>
            <a class='twitter-share-button'
            href='https://twitter.com/share'
            data-size='large'
            :data-text='"Check out this blog from @EPXLabs! http://www.epxlabs.com/" + post.url'
            data-url='google.com'
            data-hashtags='serverless,nodejs,clojure,devops'
            data-via='epxlabs'
            data-show-count='false'>
            Tweet</a>
          </div>
        </div>
      </div>
    </div>
    <ContactUs></ContactUs>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script>

<script>
import SiteHeader from './SiteHeader'
import ContactUs from './ContactUs'
import SiteFooter from './SiteFooter'
export default {
  name: 'Blog',
  data () {
    return {
      posts: [
        {title: 'AWS announces the Serverless Application Model (AWS SAM)',
          date: 'November 28, 2016',
          author: 'EPX Labs',
          url: '2016-11-28-aws-serverless-application-model',
          image: '/static/blog_images/aws_logo.jpeg'},
        {title: 'Magento: quickly set-up autoscaling Magento on AWS with a Prodution and Dev environment',
          date: 'November 15, 2016',
          author: 'Alex Shlyonov',
          url: '2016-11-15-fast-setup-magento-in-aws',
          image: '/static/blog_images/mag_aws.png'},
        {title: 'The Serverless Framework: A Demo',
          date: 'November 08, 2016',
          author: 'Alex Martin',
          url: '2016-11-08-serverless-demo',
          image: '/static/blog_images/serverless.gif'},
        {title: 'ECK stack: Simplify the ELK stack with AWS services',
          date: 'November 03, 2016',
          author: 'Alex Shlyonov & Evan Sinicin',
          url: '2016-11-03-eck',
          image: '/static/blog_images/kibana.png'},
        {title: 'Zsh: colorize man pages',
          date: 'October 31, 2016',
          author: 'Alex Shlyonov',
          url: '2016-10-31-zsh-colorize-man-pages',
          image: '/static/blog_images/oh-my-zsh.png'},
        {title: 'Zsh: useful shortcuts',
          date: 'October 31, 2016',
          author: 'Alex Shlyonov',
          url: '2016-10-31-zsh-useful-shortcuts',
          image: '/static/blog_images/shortcut.jpg'},
        {title: 'Zsh: in the pursuit of efficiency',
          date: 'October 27, 2016',
          author: 'Alex Shlyonov',
          url: '2016-08-27-zsh-in-the-pursuit-of-efficiency',
          image: '/static/blog_images/iterm_zsh_agnoster.png'},
        {title: 'An Introduction to clojure.spec',
          date: 'October 25, 2016',
          author: 'Alex Martin',
          url: '2016-10-25-an-introduction-to-clojure-spec',
          image: '/static/blog_images/clojure-spec.jpg'},
        {title: 'Node 7 async/await and promises from scratch',
          date: 'October 25, 2016',
          author: 'Brian Rosamilia',
          url: '2016-10-27-node-7-async-await-and-promises-from-scratch',
          image: '/static/blog_images/nodejs.png'},
        {title: 'Getting started with Stripe-Clojure',
          date: 'October 25, 2016',
          author: 'Chris McGillicuddy',
          url: '2016-10-25-stripe-clojure-blog-post',
          image: '/static/blog_images/stripe.png'},
        {title: 'Serverless NYC - The Serverless Landscape',
          date: 'September 5, 2016',
          author: 'Evan Sinicin',
          url: '2016-09-05-serverless-nyc-the-serverless-landscape',
          image: '/static/blog_images/serverless-landscape.jpg'},
        {title: 'Serverless - Where do I start?',
          date: 'September 4, 2016',
          author: 'Brian Knapp and Evan Sinicin',
          url: '2016-09-04-serverless-where-do-i-start',
          image: '/static/blog_images/where-do-i-start.png'},
        {title: 'Cost Savings: Vol. 1 - Cost Savings in a Serverless World',
          date: 'September 3, 2016',
          author: 'Evan Sinicin',
          url: '2016-09-03-cost-savings-in-serverless-world',
          image: '/static/blog_images/serverless-cost-savings-1.jpg'}]
    }
  },
  components: {
    SiteHeader,
    ContactUs,
    SiteFooter
  }
}
  </script>
