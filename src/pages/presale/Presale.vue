<script setup>
import PresaleHeader from "../layouts/PresaleHeader.vue";
import PresaleFooter from "../layouts/PresaleFooter.vue";
import AnimationButton from "../../components/button/AnimationButton.vue";
import CountDown from "../../components/CountDown.vue";
</script>

<template>
  <PresaleHeader />
  <main class="ud-container">
    <section class="dark" style="padding-top: 150px">
      <CountDown />
      <div class="container py-4">
        <h1 class="h1 text-center" id="pageHeaderTitle"></h1>

        <article class="postcard dark blue">
          <video
            src="../../assets/img/helmet-video.mp4"
            class="postcard__img"
            autoplay
            muted
            loop
          ></video>
          <div class="postcard__text">
            <h1 class="postcard__title blue">Golden Helmet NFT</h1>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
              Helmet is the most important NFT at PixelMine. Helmet buyers will
              automatically get Axe, Hammer and Drill for free. Also Helmet
              owners will get %20 of the all AVAX payments which equals to
              team's reward. Helmet will be sold only at presale, only 1000 pcs
              and only for whitelisted people.
            </div>
            <div style="margin-top: 10px">
              <span class="helmet-remained">1000</span> / 1000 Remained
            </div>
            <AnimationButton mint="helmet" />
          </div>
        </article>
        <article class="postcard dark red">
          <video
            src="../../assets/img/shovel-video.mp4"
            class="postcard__img"
            autoplay
            muted
            loop
          ></video>
          <div class="postcard__text">
            <h1 class="postcard__title red">Shovel NFT</h1>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
              Shovel is for the players who like passive income. With shovel,
              player can get PIMI rewards every 3 days. PIMI reward depends on
              players mine level and PIMI collected at total pool. Shovel will
              be sold only at preasale and only 1000 pcs for whitelisted people.
            </div>
            <div style="margin-top: 10px">
              <span class="shovel-remained">1000</span> / 1000 Remained
            </div>
            <AnimationButton mint="shovel" />
          </div>
        </article>
      </div>
    </section>
    <PresaleFooter />
  </main>
</template>
<style>
@font-face {
  font-family: "Bolden Van";
  src: url("../../assets/fonts/boldenvan.ttf");
}
</style>

<script>
import { NETWORKS } from "../../util/networks";
import Farm from "../../abi/PixelMine.json";

export default {
  setup() {},

  components: {
    PresaleHeader,
    PresaleFooter,
    AnimationButton,
    CountDown,
  },

  methods: {
    async connectWallet() {
      if (await this.isEthereumSupported()) {
        this.$toast.success(
          `Wallet Connected. Your wallet address: ${
            this.$Web3.getAccounts()[0]
          }`,
          {
            position: this.position,
            duration: this.duration,
          }
        );

        var isAvax = await this.checkNetwork();
        if (isAvax) {
          await this.connectToAvalanche();
        }

        this.emitter.emit("acconts-change", this.$Web3.getAccounts());
      }
    },

    async buyNFT(type) {
      if (this.$Web3.getProvider() != null) {
        var isAvax = await this.checkNetwork();
        if (isAvax) {
          if (type == "helmet") {
            const mintAction = await this.$Web3.farm.mintNFT(
              this.$Web3.helmet,
              { value: this.$Web3.ethers.utils.parseEther("5") }
            );
            try {
              await mintAction.wait();
              this.$toast.success(
                "Congratulations! Your transaction succeeded to Mint NFT.",
                {
                  position: this.position,
                  duration: this.duration,
                }
              );
            } catch (err) {
              this.$toast.error("An error occured. Your transaction failed!", {
                position: this.position,
                duration: this.duration,
              });
            }
          } else {
            const mintAction = await this.$Web3.farm.mintNFT(
              this.$Web3.shovel,
              { value: this.$Web3.ethers.utils.parseEther("4") }
            );
            try {
              await mintAction.wait();
              this.$toast.success(
                "Congratulations! Your transaction succeeded to Mint NFT.",
                {
                  position: this.position,
                  duration: this.duration,
                }
              );
            } catch (err) {
              this.$toast.error("An error occured. Your transaction failed!", {
                position: this.position,
                duration: this.duration,
              });
            }
          }
        }
      } else {
        this.$toast.error("Please connect to Metamask");
      }
    },

    async checkNetwork() {
      var chainId = await this.$Web3.ethereum.request({
        method: "eth_chainId",
      });
      if (chainId == 43113) {
        return true;
      } else {
        this.$toast.error("Please change Network to Avalanche", {
          position: this.position,
          duration: this.duration,
        });
        return false;
      }
    },
    /*
     *  Verifica se o browser suporta Web3
     *  retornando true e false, e preenchedos as carteiras
     */
    async connectToAvalanche() {
      this.$Web3.farm = new this.$Web3.ethers.Contract(
        this.farmAddress,
        Farm,
        this.$Web3.getProvider()?.getSigner()
      );
      this.$toast.success("Connected to Avananche successfully!", {
        position: this.position,
        duration: this.duration,
      });
    },

    async isEthereumSupported() {
      // MetaMask
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        this.$Web3.ethereum = ethereum;
        this.$Web3.setProvider(ethereum);
        this.$Web3.ethereum.on("accountsChanged", (accs) => {
          this.$toast.success(`Account changed: ${accs[0]}`, {
            position: this.position,
            duration: this.duration,
          });
        });
        this.$Web3.ethereum.on("chainChanged", async (_chainId) => {
          this.$toast.success(
            `Network changed. ${NETWORKS[parseInt(_chainId, 16)]}`,
            {
              position: this.position,
              duration: this.duration,
            }
          );
          var isAvax = await this.checkNetwork();
          if (isAvax) {
            await this.connectToAvalanche();
          }
        });
      } else {
        this.$toast.error("Please install Metamask on your browser.", {
          position: this.position,
          duration: this.duration,
        });
        return false;
      }
      try {
        var acts = await this.$Web3.getProvider().send("eth_requestAccounts");
        this.$Web3.setAccounts(acts);
        this.account = acts[0];

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  computed: {},

  created() {
    this.emitter.on("connect", () => this.connectWallet());
    this.emitter.on(
      "mintButtonClicked",
      async (event) => await this.buyNFT(event.mintType)
    );
  },

  mounted() {},

  data() {
    return {
      position: "bottom-left",
      duration: 3000,
      account: "",
      farmAddress: "0xCe101d9bD17a6C18c3a0fef1E2578be64Ad720F0",
    };
  },
};
</script>
