<template>
  <div id="intro">
  <header id="header" class="header-narrow" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAtElement": "#header", "stickySetTop": "0", "stickyChangeLogo": false}'>
    <div class="header-body">
      <div class="header-container container">
        <div class="header-row">
          <div class="header-column">
            <div class="header-logo">
              <a href="/" id="header-logo">
                <img src="/static/img/logos/epx_logo.svg" alt="EPX Labs" width="205" height="50" data-sticky-width="164" data-sticky-height="40" data-sticky-top="7">
              </a>
            </div>
          </div>
          <div class="header-column">
            <div class="header-row">
              <div class="header-nav header-nav-top-line">
                <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                  <i class="fa fa-bars"></i>
                </button>
                <ul class="header-social-icons social-icons hidden-xs">
                  <li class="social-icons-github"><a target="_blank" href="https://github.com/epxlabs/" title="GitHub"><i class="fa fa-github"></i></a></li>
                  <li class="social-icons-linkedin"><a target="_blank" href="https://www.linkedin.com/company/epx-labs/" title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
                  <li class="social-icons-twitter"><a target="_blank" href ="https://twitter.com/epxlabs" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                </ul>
                <div class="header-nav-main header-nav-main-square header-nav-main-effect-3 header-nav-main-sub-effect-1 collapse">
                  <nav>
                    <ul class="nav nav-pills" id="mainNav">
                      <li id="devops">
                        <router-link :to="'/devops'" data-hash data-hash-offset="70" class="nav-links">DEVOPS</router-link>
                      </li>
                      <li id="serverless">
                        <router-link :to="'/serverless'" data-hash data-hash-offset="70" class="nav-links">SERVERLESS</a></router-link>
                      </li>
                      <li id="nodejs">
                        <router-link :to="'/nodejs'" data-hash data-hash-offset="70" class="nav-links">NODE.JS</a></router-link>
                      </li>
                      <li id="clojure">
                        <router-link :to="'/clojure'" data-hash data-hash-offset="70" class="nav-links">CLOJURE</a></router-link>
                      </li>
                      <li id="who-we-are">
                        <router-link :to="'/about'" data-hash data-hash-offset="70" class="nav-links">WHO WE ARE</a></router-link>
                      </li>
                      <li id="blog">
                        <router-link :to="'/harvest'" data-hash data-hash-offset="70" class="nav-links">Harvest</a></router-link>
                      </li>
                      <li id="careers">
                        <router-link :to="'/careers'" data-hash data-hash-offset="70" class="nav-links">JOIN US!</a></router-link>
                      </li>
                      <li id="contact-us">
                        <a data-hash data-hash-offset="70" class="nav-links" @click="smoothScroll()">CONTACT US</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
</template>



<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    smoothScroll () {
      this.$SmoothScroll(document.getElementById('contact'), 1500)
    }
  }
}
</script>
