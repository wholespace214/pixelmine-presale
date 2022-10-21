<template>
  <header class="ud-header">
    <div
      class="wrapper wrapper--header d-flex justify-content-between align-items-center ud-gp-50"
    >
      <div class="d-flex">
        <router-link to="/">
          <img
            src="../../assets/img/logo.svg"
            alt="Pixel Mine Presale Logo"
            class="ud-logo-img"
          />
        </router-link>
      </div>

      <div class="d-flex justify-content-end">
        <a
          href="#"
          class="ud-btn ud-btn--header ud-btn--orange ud-btn--hover-up"
          style="width: 210px"
          v-on:click="connected ? null : emitter.emit('connect', {})"
        >
          {{ connected == false ? "Connect Wallet" : "Wallet Connected" }}
        </a>
        <!-- <a href="#" class="ud-btn ud-btn--header ud-btn--hover-up"> </a> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {},
  methods: {
    walletConnected(accounts) {
      this.connected = true;
      this.account = accounts[0];
    },
  },
  computed: {},
  created() {
    this.emitter.on("acconts-change", (accounts) =>
      this.walletConnected(accounts)
    );
  },
  mounted() {},
  data() {
    return {
      connected: this.$Web3.getProvider() != null,
      account: this.$Web3.getAccounts(),
    };
  },
};
</script>
