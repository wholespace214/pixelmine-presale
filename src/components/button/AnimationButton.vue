<style>
#animationButton {
  text-align: center;
  width: 150px;
  margin-top: 20px;
  position: relative;
  padding: 10px;
  padding-bottom: 20px;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 1px;
  overflow: hidden;
}
#animationButton:hover {
  background: #03e9f4;
  color: #d1dbc3;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 200px #03e9f4;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}
#animationButton:nth-child(1) {
  filter: hue-rotate(270deg);
}
#animationButton:nth-child(2) {
  filter: hue-rotate(110deg);
}
#animationButton span {
  position: absolute;
  display: block;
}
#animationButton span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
#animationButton span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
#animationButton span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

#animationButton span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>

<template>
  <a
    id="animationButton"
    href="#mintButton"
    v-on:click="emitter.emit('mintButtonClicked', { mintType: mint })"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    BUY NFT
  </a>
</template>

<script>
export default {
  props: {
    mint: String,
  },
  computed: {},

  mounted() {},

  data() {
    return {};
  },
};
</script>
