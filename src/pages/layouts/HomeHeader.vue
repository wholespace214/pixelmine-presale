<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleScroll() {
      let currentScroll =
          window.pageYOffset || document.documentElement.scrollTop,
        header = document.querySelector(".ud-header");

      if (currentScroll > 0) {
        header.classList.add("ud-header--active");
      } else {
        header.classList.remove("ud-header--active");
      }
    },
  },

  mounted() {
    var mobileMenu = document.querySelector(".ud-mobile-menu"),
      mobileMenuOpen = document.querySelector(".js-mobile-menu-open"),
      mobileMenuClose = document.querySelectorAll(".js-mobile-menu-close");

    mobileMenuOpen.addEventListener("click", () => {
      mobileMenu.classList.add("ud-mobile-menu--active");
    });

    mobileMenuClose.forEach((element) => {
      element.addEventListener("click", () => {
        mobileMenu.classList.remove("ud-mobile-menu--active");
      });
    });
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <header class="ud-header">
    <div class="wrapper d-flex justify-content-between align-items-center">
      <div class="ud-header__left-side">
        <router-link to="/">
          <img
            src="../../assets/img/logo.svg"
            alt="Pixel Mine Logo"
            class="ud-logo-img"
          />
        </router-link>
      </div>

      <div class="ud-header__right-side">
        <nav class="ud-nav ud-mr-50">
          <ul class="ud-nav-list">
            <div class="ud-nav__item">
              <a href="#how-to-play" class="ud-nav__link">How to Play</a>
            </div>

            <div class="ud-nav__item">
              <a href="#nfts" class="ud-nav__link">NFTs</a>
            </div>

            <div class="ud-nav__item">
              <a href="#tokenomics" class="ud-nav__link">Tokenomics</a>
            </div>

            <div class="ud-nav__item">
              <a href="#team" class="ud-nav__link">Team</a>
            </div>

            <div class="ud-nav__item">
              <a
                href="https://whitepaper.pixelmine.io"
                target="_blank"
                class="ud-nav__link"
                >Whitepaper</a
              >
            </div>

            <div class="ud-nav__item">
              <a
                href="https://github.com/solidproof/projects/blob/main/PixelMine/SmartContract_Audit_Solidproof_PixelMine.pdf"
                target="_blank"
                class="ud-nav__link"
                >Audit</a
              >
            </div>
          </ul>
        </nav>

        <a
          href="#"
          class="ud-btn ud-btn--header ud-btn--orange ud-btn--hover-up"
          >Play</a
        >
      </div>

      <div class="ud-mobile-menu__open js-mobile-menu-open">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </header>

  <div class="ud-mobile-menu">
    <div class="ud-mobile-menu__header">
      <router-link to="/">
        <img
          src="../../assets/img/logo.svg"
          alt="Pixel Mine Logo"
          class="ud-logo-img ud-logo-img--mobile-menu"
        />
      </router-link>

      <div class="ud-mobile-menu__close js-mobile-menu-close">
        <i class="fas fa-times"></i>
      </div>
    </div>

    <div class="ud-mobile-menu__main">
      <nav class="ud-nav ud-nav--mobile-menu ud-mb-30">
        <ul class="ud-nav-list">
          <div class="ud-nav__item js-mobile-menu-close">
            <a href="#how-to-play" class="ud-nav__link">How to Play</a>
          </div>

          <div class="ud-nav__item js-mobile-menu-close">
            <a href="#nfts" class="ud-nav__link">NFTs</a>
          </div>

          <div class="ud-nav__item js-mobile-menu-close">
            <a href="#tokenomics" class="ud-nav__link">Tokenomics</a>
          </div>

          <div class="ud-nav__item js-mobile-menu-close">
            <a href="#team" class="ud-nav__link">Team</a>
          </div>

          <div class="ud-nav__item">
            <a
              href="https://whitepaper.pixelmine.io"
              target="_blank"
              class="ud-nav__link"
              >Whitepaper</a
            >
          </div>

          <div class="ud-nav__item">
            <a
              href="https://github.com/solidproof/projects/blob/main/PixelMine/SmartContract_Audit_Solidproof_PixelMine.pdf"
              target="_blank"
              class="ud-nav__link"
              >Audit</a
            >
          </div>
        </ul>
      </nav>

      <a href="#" class="ud-btn ud-btn--header ud-btn--orange ud-btn--hover-up"
        >Play</a
      >
    </div>
  </div>
</template>
