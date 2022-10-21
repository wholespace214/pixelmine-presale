<script setup>
import HomeHeader from "../layouts/HomeHeader.vue";
import HomeFooter from "../layouts/HomeFooter.vue";
</script>

<template>
  <HomeHeader />

  <main class="ud-container">
    <div class="ud-landing">
      <div
        class="wrapper wrapper--landing h-100 d-flex justify-content-between align-items-center"
      >
        <div class="ud-landing__left-side">
          <div class="ud-mb-15">
            <h1 class="ud-landing__title">
              Get Your Helmets and Shovels Ready!
            </h1>
          </div>

          <div class="ud-mb-50">
            <p class="ud-landing__text">
              Only 1000 pieces of Helmets and Shovels are ready for whitelisted
              presale.
            </p>
          </div>

          <div class="d-flex flex-wrap ud-gp-25 ud-mb-35">
            <a
              href="#"
              class="ud-btn ud-btn--orange ud-btn--landing ud-btn--hover-up"
              >Get Whitelisted
            </a>
            <router-link to="/presale">
              <a
                href="#"
                class="ud-btn ud-btn--border-white ud-btn--landing ud-btn--hover-up"
              >
                Presale
              </a>
            </router-link>
          </div>

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

        <div class="ud-landing__video ud-none">
          <video
            src="../../assets/img/landing-video.mp4"
            class="ud-landing__gif"
            autoplay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>

    <div class="ud-landing-bottom-video">
      <div class="ud-landing-bottom-video__container">
        <video class="ud-landing-bottom-video__video" autoplay loop muted>
          <source
            src="../../assets/img/landing-bottom-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div class="ud-none">
        <img
          src="../../assets/img/landing-bottom-video-effect.png"
          class="ud-landing-bottom-video__bottom-effect"
        />
      </div>
    </div>

    <div class="ud-how-to-play ud-section-space" id="how-to-play">
      <div class="wrapper">
        <div class="ud-how-to-play__header">
          <div class="ud-mb-5">
            <span class="ud-section__sub-title">Pixel Mine</span>
          </div>

          <h2 class="ud-section__title">How to Play</h2>
        </div>

        <div class="ud-section__line"></div>

        <div class="ud-how-to-play__main">
          <div class="ud-how-to-play__item ud-how-to-play__item--align-right">
            <span class="ud-how-to-play__count">1</span>

            <div class="ud-how-to-play__item-container">
              <span class="ud-how-to-play__text"
                >PixelMine is a very easy to play game based on AVAX
                blockchain.</span
              >
            </div>
          </div>

          <div class="ud-how-to-play__item ud-how-to-play__item--align-left">
            <span class="ud-how-to-play__count">2</span>

            <div class="ud-how-to-play__item-container">
              <span class="ud-how-to-play__text"
                >You can start buying mine with 0.1 AVAX and placing your
                mines.</span
              >
            </div>
          </div>

          <div class="ud-how-to-play__item ud-how-to-play__item--align-right">
            <span class="ud-how-to-play__count">3</span>

            <div class="ud-how-to-play__item-container">
              <span class="ud-how-to-play__text"
                >With upgrades new mine places and new mine varieties will be
                available.</span
              >
            </div>
          </div>

          <div class="ud-how-to-play__item ud-how-to-play__item--align-left">
            <span class="ud-how-to-play__count">4</span>

            <div class="ud-how-to-play__item-container">
              <span class="ud-how-to-play__text"
                >With NFT's you can collect your mines faster and you can get
                rewards.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ud-nfts ud-section-space" id="nfts">
      <div class="wrapper">
        <div class="ud-nfts__header">
          <div class="ud-mb-5">
            <span class="ud-section__sub-title">Perfect</span>
          </div>

          <h2 class="ud-section__title">Pixel Mine NFT's</h2>
        </div>

        <div class="ud-section__line"></div>

        <div class="ud-nfts__main">
          <div class="row ud-mb-125 ud-mobile-mb-50">
            <div class="col-md-6 mt-0 my-5 my-lg-0">
              <div
                class="d-flex flex-column justify-content align-items-center"
              >
                <div class="ud-mb-35">
                  <img
                    src="../../assets/img/helmet-nft.png"
                    alt="Helment NFT"
                    class="ud-nfts__img"
                  />
                </div>

                <div class="ud-mb-40">
                  <p class="ud-nfts__text">
                    Helmet is the most important NFT at PixelMine. Helmet buyers
                    will automatically get Axe, Hammer and Drill for free. Also
                    Helmet owners will get %20 of the all AVAX payments which
                    equals to team's reward. Helmet will be sold only at
                    presale, only 1000 pcs and only for whitelisted people.
                  </p>
                </div>

                <a
                  href="#"
                  class="ud-btn ud-btn--nfts ud-btn--light-red ud-btn--hover-up"
                  >Get Whitelisted</a
                >
              </div>
            </div>

            <div class="col-md-6 mt-0 my-5 my-lg-0">
              <div
                class="d-flex flex-column justify-content align-items-center"
              >
                <div class="ud-mb-35">
                  <img
                    src="../../assets/img/shovel-nft.png"
                    alt="Shovel NFT"
                    class="ud-nfts__img"
                  />
                </div>

                <div class="ud-mb-40">
                  <p class="ud-nfts__text">
                    Shovel is for the players who like passive income. With
                    shovel, player can get PIMI rewards every 3 days. PIMI
                    reward depends on players mine level and PIMI collected at
                    total pool. Shovel will be sold only at preasale and only
                    1000 pcs for whitelisted people.
                  </p>
                </div>

                <a
                  href="#"
                  class="ud-btn ud-btn--nfts ud-btn--light-red ud-btn--hover-up"
                  >Get Whitelisted</a
                >
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 my-3 my-lg-0">
              <div
                class="d-flex flex-column justify-content align-items-center"
              >
                <div class="ud-mb-35">
                  <img
                    src="../../assets/img/pickaxe-nft.png"
                    alt="Pickaxe NFT"
                    class="ud-nfts__img"
                  />
                </div>

                <p class="ud-nfts__text ud-nfts__text--small">
                  Axe makes 3x faster Phospate. Axe is also limited and can be
                  bought at in game shop.
                </p>
              </div>
            </div>

            <div class="col-md-4 my-3 my-lg-0">
              <div
                class="d-flex flex-column justify-content align-items-center"
              >
                <div class="ud-mb-35">
                  <img
                    src="../../assets/img/hammer-nft.png"
                    alt="Hammer NFT"
                    class="ud-nfts__img"
                  />
                </div>

                <p class="ud-nfts__text ud-nfts__text--small">
                  Hammer makes 3x faster Sulfur. Hammer is also limited and can
                  be bought at in game shop.
                </p>
              </div>
            </div>

            <div class="col-md-4 my-3 my-lg-0">
              <div
                class="d-flex flex-column justify-content align-items-center"
              >
                <div class="ud-mb-35">
                  <img
                    src="../../assets/img/drill-nft.png"
                    alt="Drill NFT"
                    class="ud-nfts__img"
                  />
                  <div
                    class="ud-nfts__img ud-nfts__img--small"
                    style="
                      background-image: url('/src/assets/img/drill-nft.png');
                    "
                  ></div>
                </div>

                <p class="ud-nfts__text ud-nfts__text--small">
                  Drill makes 3x faster Diamonds. Drill is also limited and can
                  be bought at in game shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ud-tokenomics ud-section-space" id="tokenomics">
      <div class="wrapper">
        <div class="ud-tokenomics__header">
          <div class="ud-mb-5">
            <span class="ud-section__sub-title">Pixel Mine</span>
          </div>

          <h2 class="ud-section__title">Tokenomics</h2>
        </div>

        <div class="ud-section__line"></div>

        <div class="ud-tokenomics__main">
          <div class="ud-tokenomics__item">
            <div class="ud-mb-20">
              <h3 class="ud-tokenomics__title">AVAX Payments</h3>
            </div>

            <img
              src="../../assets/img/avax-payments-image.png"
              alt="AVAX Payments"
              class="ud-tokenomics__img"
            />
          </div>

          <div class="ud-tokenomics__item">
            <div class="ud-mb-20">
              <h3 class="ud-tokenomics__title">NFT Sales</h3>
            </div>

            <img
              src="../../assets/img/nft-sales-image.png"
              alt="NFT Sales"
              class="ud-tokenomics__img"
            />
          </div>

          <div class="ud-tokenomics__item">
            <div class="ud-mb-20">
              <h3 class="ud-tokenomics__title">PIMI Payments</h3>
            </div>

            <img
              src="../../assets/img/pimi-payments-image.png"
              alt="PIMI Payments"
              class="ud-tokenomics__img"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="ud-team ud-section-space" id="team">
      <div class="wrapper">
        <div class="ud-team__header">
          <div class="ud-mb-5">
            <span class="ud-section__sub-title">Pixel Mine</span>
          </div>

          <h2 class="ud-section__title">Core Team</h2>
        </div>

        <div class="ud-section__line"></div>

        <div class="ud-team__main">
          <div class="ud-team__item">
            <div class="ud-mb-25">
              <img
                src="../../assets/img/mehmet-akif-demir.png"
                class="ud-team__img"
              />
            </div>

            <div class="ud-mb-5">
              <span class="ud-team__label">Project Manager</span>
            </div>

            <div class="ud-mb-10">
              <h3 class="ud-team__title">M. Akif Demir</h3>
            </div>

            <div class="ud-mb-25">
              <img
                src="../../assets/img/flag-tr.png"
                alt="Turkey Flag"
                class="ud-team__flag-img"
              />
            </div>

            <a
              href="https://www.linkedin.com/in/mehmet-akif-demir-b3a3aa15b/"
              target="_blank"
            >
              <div class="ud-team__icon">
                <i class="fab fa-linkedin"></i>
              </div>
            </a>
          </div>

          <div class="ud-team__item">
            <div class="ud-mb-25">
              <img
                src="../../assets/img/oscar-kaplan.png"
                class="ud-team__img"
              />
            </div>

            <div class="ud-mb-5">
              <span class="ud-team__label">Frontend Developer</span>
            </div>

            <div class="ud-mb-10">
              <h3 class="ud-team__title">Oscar Kaplan</h3>
            </div>

            <div class="ud-mb-25">
              <img
                src="../../assets/img/flag-ecuador.png"
                alt="Ecuador Flag"
                class="ud-team__flag-img"
              />
            </div>

            <a
              href="https://www.linkedin.com/in/oscar-kaplan-6047a1232/"
              target="_blank"
            >
              <div class="ud-team__icon">
                <i class="fab fa-linkedin"></i>
              </div>
            </a>
          </div>

          <div class="ud-team__item">
            <div class="ud-mb-25">
              <img
                src="../../assets/img/xavier-fernandez.png"
                class="ud-team__img"
              />
            </div>

            <div class="ud-mb-5">
              <span class="ud-team__label">Web3 Developer</span>
            </div>

            <div class="ud-mb-10">
              <h3 class="ud-team__title">Xavier Fernandez</h3>
            </div>

            <div class="ud-mb-25">
              <img
                src="../../assets/img/flag-spain.png"
                alt="Spain Flag"
                class="ud-team__flag-img"
              />
            </div>

            <a href="#" target="_blank">
              <div class="ud-team__icon">
                <i class="fab fa-linkedin"></i>
              </div>
            </a>
          </div>

          <div class="ud-team__item">
            <div class="ud-mb-25">
              <img src="../../assets/img/buben.jpeg" class="ud-team__img" />
            </div>

            <div class="ud-mb-5">
              <span class="ud-team__label">Designer</span>
            </div>

            <div class="ud-mb-10">
              <h3 class="ud-team__title">Buben</h3>
            </div>

            <div class="ud-mb-25">
              <img
                src="../../assets/img/flag-united-states.png"
                alt="United States Flag"
                class="ud-team__flag-img"
              />
            </div>

            <a href="#" target="_blank">
              <div class="ud-team__icon">
                <i class="fab fa-linkedin"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="ud-join-community">
      <div class="ud-join-community__left-side">
        <img
          src="../../assets/img/join-community-image.png"
          alt="Join Community Image"
          class="ud-join-community__img"
        />
      </div>

      <div class="ud-join-community__right-side">
        <div class="ud-mb-25">
          <h3 class="ud-join-community__title">
            Join the Pixel Mine Community
          </h3>
        </div>

        <div class="ud-mb-50">
          <p class="ud-join-community__text">
            Join our growing community and don't miss any announcements and
            features!
          </p>
        </div>

        <div class="ud-join-community__btn-container">
          <a
            href="#"
            target="_blank"
            class="ud-join-community__btn ud-join-community__btn--discord"
          >
            <div class="ud-join-community__btn-icon ud-mr-10">
              <i class="fab fa-discord"></i>
            </div>
            Discord
          </a>

          <a
            href="#"
            target="_blank"
            class="ud-join-community__btn ud-join-community__btn--telegram"
          >
            <div class="ud-join-community__btn-icon ud-mr-10">
              <i class="fab fa-telegram"></i>
            </div>
            Telegram
          </a>

          <a
            href="#"
            target="_blank"
            class="ud-join-community__btn ud-join-community__btn--instagram"
          >
            <div class="ud-join-community__btn-icon ud-mr-10">
              <i class="fab fa-instagram"></i>
            </div>
            Instagram
          </a>
        </div>
      </div>
    </div>
    <HomeFooter />
  </main>
</template>
<style>
@font-face {
  font-family: "Bolden Van";
  src: url("../../assets/fonts/boldenvan.ttf");
}
</style>

<script>
export default {
  components: {
    HomeHeader,
    HomeFooter,
  },

  computed: {},

  mounted() {},

  data() {
    return {};
  },
};
</script>
