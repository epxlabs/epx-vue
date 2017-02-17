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
                        <a data-hash data-hash-offset="70" href="/devops" class="nav-links">DEVOPS</a>
                      </li>
                      <li id="serverless">
                        <a data-hash data-hash-offset="70" href="/serverless" class="nav-links">SERVERLESS</a>
                      </li>
                      <li id="nodejs">
                        <a data-hash data-hash-offset="70" href="/nodejs" class="nav-links">NODE.JS</a>
                      </li>
                      <li id="clojure">
                        <a data-hash data-hash-offset="70" href="/clojure" class="nav-links">CLOJURE</a>
                      </li>
                      <li id="who-we-are">
                        <a data-hash data-hash-offset="70" href="/about" class="nav-links">WHO WE ARE</a>
                      </li>
                      <li id="blog">
                        <a data-hash data-hash-offset="70" href="/blog" class="nav-links">BLOG</a>
                      </li>
                      <li id="careers">
                        <a data-hash data-hash-offset="70" href="/careers" class="nav-links">JOIN US!</a>
                      </li>
                      <li id="contact">
                        <a data-hash data-hash-offset="70" href="/#contact" class="nav-links">CONTACT US</a>
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
  }
}
</script>
