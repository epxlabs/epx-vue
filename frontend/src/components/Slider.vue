<template>
  <div class="slider-container rev_slider_wrapper" style="height: 1000px;">
  <div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"sliderLayout": "fullscreen", "fullScreenOffsetContainer": "", "fullScreenOffset": "0"}'>
    <ul>
      <li data-transition="fade">
        <img src="/static/img/landing.jpg"
             alt=""
             data-bgposition="center center"
             data-bgfit="cover"
             data-bgrepeat="no-repeat"
             class="rev-slidebg">
        <div class="rs-background-video-layer"
             data-forcerewind="on"
             data-volume="mute"
             data-videowidth="100%"
             data-videoheight="100%"
             data-videomp4="/static/videos/11845277.mp4"
             data-videopreload="preload"
             data-videoloop="loop"
             data-forceCover="1"
             data-aspectratio="16:9"
             data-autoplay="true"
             data-autoplayonlyfirsttime="false"
             data-nextslideatend="true"
             ></div>
        <!--<div class="tp-caption"
             data-x="center" data-hoffset="-150"
             data-y="center" data-voffset="-95"
             data-start="1000"
             style="z-index: 5"
             data-transform_in="x:[-300%];opacity:0;s:500;"><img src="img/slides/slide-title-border.png" alt=""></div>-->
        <div class="tp-caption top-label"
             data-x="center" data-hoffset="0"
             data-y="center" data-voffset="-95"
             data-start="500"
             style="z-index: 5"
             data-transform_in="y:[-300%];opacity:0;s:500;">Are you ready for</div>
        <!--<div class="tp-caption"
             data-x="center" data-hoffset="150"
             data-y="center" data-voffset="-95"
             data-start="1000"
             style="z-index: 5"
             data-transform_in="x:[300%];opacity:0;s:500;"><img src="img/slides/slide-title-border.png" alt=""></div>-->
        <div class="tp-caption main-label"
             data-x="center" data-hoffset="0"
             data-y="center" data-voffset="-45"
             data-start="1500"
             data-whitespace="nowrap"
             data-transform_in="y:[100%];s:500;"
             data-transform_out="opacity:0;s:500;"
             style="z-index: 5"
             data-mask_in="x:0px;y:0px;">THE FUTURE?</div>
        <!--<div class="tp-caption bottom-label"
             data-x="center" data-hoffset="0"
             data-y="center" data-voffset="5"
             data-start="2000"
             style="z-index: 5"
             data-transform_in="y:[100%];opacity:0;s:500;">Check out our options and features.</div>-->
        <a class="tp-caption btn btn-lg btn-primary btn-slider-action" href="#learn-more"
           data-hash
           data-hash-offset="85"
           data-x="center" data-hoffset="0"
           data-y="center" data-voffset="80"
           data-start="2200"
           data-whitespace="nowrap"
           data-transform_in="y:[100%];s:500;"
           data-transform_out="opacity:0;s:500;"
           style="z-index: 5"
           data-mask_in="x:0px;y:0px;">Learn More</a>
        <div class="tp-dottedoverlay tp-opacity-overlay"></div>
      </li>
    </ul>
  </div>
</div>
</template>



<script>
export default {
  name: 'Slider',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
