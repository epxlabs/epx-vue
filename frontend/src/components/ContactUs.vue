<template>
  <section id="contact" class="section section-no-border mb-none bottom">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="alert alert-success hidden" id="contactSuccess">
          <strong>Success!</strong> We have received your message.
        </div>
        <div class="alert alert-danger hidden" id="contactError">
          <strong>Oops!</strong> An error occured and your message could not be sent. Please email us at <strong>hello@epxlabs.com</strong> or call us at <strong>+1 (646)-768-0123</strong>
        </div>
        <h2 class="mb-sm mt-sm"><strong>Contact</strong> Us</h2>
        <form id="contactForm" action="" method="POST">
          <div class="row">
            <div class="form-group">
              <div class="col-md-6">
                <label>Your name</label>
                <input type="text" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="name" id="name" required>
              </div>
              <div class="col-md-6">
                <label>Your email address</label>
                <input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="email" id="email" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <div class="col-md-12">
                <label>Message</label>
                <textarea maxlength="5000" data-msg-required="Please enter your message." rows="6" class="form-control" name="message" id="message" required></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <input type="submit" value="Submit" class="btn btn-primary btn-lg mb-xlg" data-loading-text="Loading...">
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <h4 class="heading-primary mt-lg">Get in <strong>Touch</strong></h4>
        <p id="get-in-touch">We are always available to help solve your business problems, meet others in the serverless space, and discuss what we're passionate about. You can get in touch with us here :-)</p>
        <hr>
        <ul id="contact-info" class="list list-icons list-icons-style-3 mt-xlg">
          <li><i class="fa fa-phone"></i> <strong>Phone:</strong> 646.768.0123</li>
          <li><i class="fa fa-envelope"></i> <strong>Email:</strong><a href="mailto:hello@epxlabs.com"></a> hello@epxlabs.com</li>
        </ul>
        <hr>
        <h4 class="heading-primary">Follow <strong>Us</strong></h4>
        <ul class="social-icons">
          <li class="social-icons-github"><a target="_blank" href="https://github.com/epxlabs/" title="GitHub"><i class="fa fa-github"></i></a></li>
          <li class="social-icons-linkedin"><a target="_blank" href="https://www.linkedin.com/company/epx-labs/" title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
          <li class="social-icons-twitter"><a target="_blank" href ="https://twitter.com/epxlabs" title="Twitter"><i class="fa fa-twitter"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
<!-- END CONTACT US -->

</template>



<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
