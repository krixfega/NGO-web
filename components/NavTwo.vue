<template>
  <div>
    <div class="main-header__two">
      <div class="main-header__top">
        <div class="container">
          <p>Welcome to non profit charity platform</p>
          <div class="main-header__social">
            <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="facebook"><i class="fab fa-facebook-square"></i></a>
            <a href="#" aria-label="pinterest"><i class="fab fa-pinterest-p"></i></a>
            <a href="#" aria-label="instagram"><i class="fab fa-instagram"></i></a>
          </div><!-- /.main-header__social -->
        </div><!-- /.container -->
      </div><!-- /.main-header__top -->
      <div class="header-upper">
        <div class="container">
          <div class="logo-box">
            <a href="/" aria-label="logo image"><img src="/assets/images/logo-dark.png" width="101" alt=""></a>
            <span @click="menuOpen = !menuOpen" class="fa fa-bars mobile-nav__toggler"></span>
          </div><!-- /.logo-box -->

          <div class="header-info">
            <div class="header-info__box">
              <i class="azino-icon-email1"></i>
              <div class="header-info__box-content">
                <h3>Email</h3>
                <p><a href="mailto:needhelp@azino.com">needhelp@azino.com</a></p>
              </div><!-- /.header-info__box-content -->
            </div><!-- /.header-info__box -->
            <div class="header-info__box">
              <i class="azino-icon-calling"></i>
              <div class="header-info__box-content">
                <h3>Phone</h3>
                <p><a href="tel:666-888-0000">666 888 0000</a></p>
              </div><!-- /.header-info__box-content -->
            </div><!-- /.header-info__box -->
            <div class="header-info__box">
              <i class="azino-icon-address"></i>
              <div class="header-info__box-content">
                <h3>Visit</h3>
                <p>88 Broklyn Golden Street, USA</p>
              </div><!-- /.header-info__box-content -->
            </div><!-- /.header-info__box -->
          </div><!-- /.header-info -->

        </div><!-- /.container -->
      </div><!-- /.header-upper -->
      <nav class="main-menu">
        <div class="container">
          <ul class="main-menu__list">
            <li class="dropdown">
              <nuxt-link to="/">Home</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/">Home One</nuxt-link>
                </li>
                <li><nuxt-link to="/index-2">Home Two</nuxt-link></li>
                <li class="dropdown">
                  <a href="#">Header Styles</a>
                  <ul>
                    <li><nuxt-link to="/">Header One</nuxt-link></li>
                    <li><nuxt-link to="/index-2">Header Two</nuxt-link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <nuxt-link to="/causes">Causes</nuxt-link>
              <ul>
                <li><nuxt-link to="/causes">Causes</nuxt-link></li>
                <li><nuxt-link to="/cause-details">Cause Details</nuxt-link></li>
              </ul>
            </li>
            <li class="dropdown"><nuxt-link to="/events">Events</nuxt-link>
              <ul>
                <li><nuxt-link to="/events">Events</nuxt-link></li>
                <li><nuxt-link to="/event-details">Event Details</nuxt-link></li>
              </ul>
            </li>
            <li class="dropdown"><nuxt-link to="/news">News</nuxt-link>
              <ul>
                <li><nuxt-link to="/news">News</nuxt-link></li>
                <li><nuxt-link to="/news-details">News Details</nuxt-link></li>
              </ul>
            </li>
            <li class="dropdown"><a href="#">Pages</a>
              <ul>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/volunteers">Volunteers</nuxt-link></li>
                <li><nuxt-link to="/become-volunteer">Become a Volunteer</nuxt-link></li>
                <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li class="search-btn search-toggler">
              <a href="#"><i class="azino-icon-magnifying-glass"></i></a>
            </li>
          </ul><!-- /.main-menu__list -->
          <a href="contact.html" class="thm-btn dynamic-radius">Donate Now</a><!-- /.thm-btn dynamic-radius -->
        </div><!-- /.container -->
      </nav>
      <!-- /.main-menu -->
    </div><!-- /.main-header__two -->

    <div :class="`stricky-header stricked-menu stricky-header-two ${sticky ? 'stricky-fixed' : ''}`">
      <div class="container">
        <div class="logo-box">
          <a href="index.html"><img src="assets/images/logo-light.png" width="101" alt=""></a>
        </div><!-- /.logo-box -->
        <div class="sticky-header__content">
          <ul class="main-menu__list">
            <li class="dropdown">
              <nuxt-link to="/">Home</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/">Home One</nuxt-link>
                </li>
                <li><nuxt-link to="/index-2">Home Two</nuxt-link></li>
                <li class="dropdown">
                  <a href="#">Header Styles</a>
                  <ul>
                    <li><nuxt-link to="/">Header One</nuxt-link></li>
                    <li><nuxt-link to="/index-2">Header Two</nuxt-link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <nuxt-link to="/causes">Causes</nuxt-link>
              <ul>
                <li><nuxt-link to="/causes">Causes</nuxt-link></li>
                <li><nuxt-link to="/cause-details">Cause Details</nuxt-link></li>
              </ul>
            </li>
            <li class="dropdown"><nuxt-link to="/events">Events</nuxt-link>
              <ul>
                <li><nuxt-link to="/events">Events</nuxt-link></li>
                <li><nuxt-link to="/event-details">Event Details</nuxt-link></li>
              </ul>
            </li>
            <li class="dropdown"><nuxt-link to="/news">News</nuxt-link>
              <ul>
                <li><nuxt-link to="/news">News</nuxt-link></li>
                <li><nuxt-link to="/news-details">News Details</nuxt-link></li>
              </ul>
            </li>
            <li class="dropdown"><a href="#">Pages</a>
              <ul>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/volunteers">Volunteers</nuxt-link></li>
                <li><nuxt-link to="/become-volunteer">Become a Volunteer</nuxt-link></li>
                <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li class="search-btn search-toggler">
              <a href="#"><i class="azino-icon-magnifying-glass"></i></a>
            </li>
          </ul>
        </div><!-- /.sticky-header__content -->
      </div><!-- /.container -->
    </div>

    <div :class="`mobile-nav__wrapper ${menuOpen ? 'expanded' : ''}`">
      <div class="mobile-nav__overlay mobile-nav__toggler"></div>
      <!-- /.mobile-nav__overlay -->
      <div class="mobile-nav__content">
        <span id="mobile-nav__close" class="mobile-nav__close mobile-nav__toggler"><i class="far fa-times"></i></span>

        <div class="logo-box">
          <a href="/" aria-label="logo image"><img src="/assets/images/logo-light.png" width="101" alt="" /></a>
        </div>
        <!-- /.logo-box -->
        <div class="mobile-nav__container">

          <div class="container">
            <ul class="main-menu__list dynamic-radius" style="border-bottom-left-radius: 163.5px; border-top-left-radius: 163.5px;">
              <li class="dropdown current">
                <a href="#">Home</a>
                <ul>
                  <li>
                    <nuxt-link to="/">Home One</nuxt-link>
                  </li>
                  <li class="current"><nuxt-link to="/index-2">Home Two</nuxt-link></li>
                  <li class="dropdown">
                    <a href="#">Header Styles</a>
                    <ul>
                      <li><nuxt-link to="/">Header One</nuxt-link></li>
                      <li class="current"><nuxt-link to="/index-2">Header Two</nuxt-link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <nuxt-link to="/causes">Causes</nuxt-link>
                <ul>
                  <li><nuxt-link to="/causes">Causes</nuxt-link></li>
                  <li><nuxt-link to="/cause-details">Cause Details</nuxt-link></li>
                </ul>
              </li>
              <li class="dropdown"><nuxt-link to="/events">Events</nuxt-link>
                <ul>
                  <li><nuxt-link to="/events">Events</nuxt-link></li>
                  <li><nuxt-link to="/event-details">Event Details</nuxt-link></li>
                </ul>
              </li>
              <li class="dropdown"><nuxt-link to="/news">News</nuxt-link>
                <ul>
                  <li><nuxt-link to="/news">News</nuxt-link></li>
                  <li><nuxt-link to="/news-details">News Details</nuxt-link></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#">Pages</a>
                <ul>
                  <li><nuxt-link to="/about">About</nuxt-link></li>
                  <li><nuxt-link to="/volunteers">Volunteers</nuxt-link></li>
                  <li><nuxt-link to="/become-volunteer">Become a Volunteer</nuxt-link></li>
                  <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                </ul>
              </li>
              <li><nuxt-link to="/contact">Contact</nuxt-link></li>
              <li class="search-btn search-toggler">
                <a href="#"><i class="azino-icon-magnifying-glass"></i></a>
              </li>
            </ul><!-- /.main-menu__list -->
            <a href="/contact" class="thm-btn dynamic-radius" style="border-bottom-left-radius: 23px; border-top-left-radius: 23px;">Donate Now</a><!-- /.thm-btn dynamic-radius -->
          </div>

        </div>
        <!-- /.mobile-nav__container -->

        <ul class="mobile-nav__contact list-unstyled">
          <li>
            <i class="azino-icon-email"></i>
            <a href="mailto:needhelp@azino.com">needhelp@azino.com</a>
          </li>
          <li>
            <i class="azino-icon-telephone"></i>
            <a href="tel:666-888-0000">666 888 0000</a>
          </li>
        </ul><!-- /.mobile-nav__contact -->
        <div class="mobile-nav__top">
          <div class="mobile-nav__language">
            <img src="/assets/images/resources/flag-1-1.jpg" alt="">
            <label class="sr-only" for="language-select">select language</label><!-- /#language-select.sr-only -->
            <select class="selectpicker" id="language-select">
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
            </select>
          </div><!-- /.mobile-nav__language -->
          <div class="mobile-nav__social">
            <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="facebook"><i class="fab fa-facebook-square"></i></a>
            <a href="#" aria-label="pinterest"><i class="fab fa-pinterest-p"></i></a>
            <a href="#" aria-label="instagram"><i class="fab fa-instagram"></i></a>
          </div><!-- /.mobile-nav__social -->
        </div><!-- /.mobile-nav__top -->



      </div>
      <!-- /.mobile-nav__content -->
    </div>

  </div>
</template>

<script>
export default {
name: "NavTwo",
  data() {
    return {
      sticky: false,
      menuOpen: false,
      menuClose: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.menuCloseHandle();
  },
  methods: {

    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true
      } else if (window.scrollY < 70) {
        this.sticky = false
      }
    },

    menuCloseHandle() {
      //Close Mobile Menu
      let sideMenuCloser = document.getElementById(
        "mobile-nav__close"
      );

      sideMenuCloser.addEventListener("click", function () {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.remove("expanded");
      });
    }

  }
}
</script>

<style scoped>

</style>
