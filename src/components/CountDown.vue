<style>
@import url(https://fonts.googleapis.com/css?family=Covered+By+Your+Grace);

#days {
  font-size: 140px;
  color: #db4844;
}
#hours {
  font-size: 100px;
  color: #f07c22;
}
#minutes {
  font-size: 70px;
  color: #f6da74;
}
#seconds {
  font-size: 50px;
  color: #abcd58;
}

.inline-block {
  display: inline-block;
  line-height: 1;
  padding: 20px;
  padding-top: 0px;
  font-size: 40px;
}

.description {
  display: block;
  font-size: 20px;
  color: white;
}

#timer {
  text-align: center;
  font-family: "Covered By Your Grace", cursive;
}

#remained-text {
  color: #d1cab1;
  font-size: 40px;
}
</style>

<template>
  <div id="timer">
    <div class="inline-block" id="days"></div>
    <div class="inline-block" id="hours"></div>
    <div class="inline-block" id="minutes"></div>
    <div class="inline-block" id="seconds"></div>
    <div id="remained-text">Time Remained for PRESALE</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
    };
  },

  methods: {
    makeTimer() {
      var endTime = new Date("April 5, 2022 17:00:00 PDT");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      document.querySelector("#days").innerHTML =
        days + "<span class='description'>Days</span>";
      document.querySelector("#hours").innerHTML =
        hours + "<span class='description'>Hours</span>";
      document.querySelector("#minutes").innerHTML =
        minutes + "<span class='description'>Minutes</span>";
      document.querySelector("#seconds").innerHTML =
        seconds + "<span class='description'>Seconds</span>";
    },
  },

  mounted() {},

  created() {
    this.interval = setInterval(this.makeTimer, 1000);
  },

  unmounted() {
    clearInterval(this.interval);
  },
};
</script>

<script></script>
