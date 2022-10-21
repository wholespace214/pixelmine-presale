<template>
  <footer class="ud-footer">
    <div
      class="wrapper d-flex flex-column justify-content-center align-items-center"
    >
      <div class="ud-mb-60">
        <router-link to="/">
          <img
            src="../../assets/img/logo.svg"
            alt="Pixel Mine Logo"
            class="ud-footer__logo-img"
          />
        </router-link>
      </div>

      <nav class="ud-nav ud-nav--footer ud-mb-25">
        <ul class="ud-nav-list">
          <li class="ud-nav__item">
            <a class="ud-nav__link">Pixel Mine © 2022</a>
          </li>
        </ul>
      </nav>

      <div class="ud-social-media">
        <a href="#" target="_blank">
          <div class="ud-social-media__item">
            <i class="fab fa-discord"></i>
          </div>
        </a>

        <a href="#" target="_blank">
          <div class="ud-social-media__item">
            <i class="fab fa-twitter"></i>
          </div>
        </a>

        <a href="#" target="_blank">
          <div class="ud-social-media__item">
            <i class="fab fa-instagram"></i>
          </div>
        </a>

        <a href="#" target="_blank">
          <div class="ud-social-media__item">
            <i class="fab fa-telegram"></i>
          </div>
        </a>

        <a href="#" target="_blank">
          <div class="ud-social-media__item">
            <i class="fab fa-medium"></i>
          </div>
        </a>
      </div>
    </div>
  </footer>
</template>
