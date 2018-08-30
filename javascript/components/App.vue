<template lang="html">
  <main class="o-main">
    <div class="o-main__home-content">
      <section class="c-origami">
        <transition name="butterfly-move"
                    enter-active-class="fly-in"
                    leave-active-class="fly-out">
          <Butterfly v-if="showButterfly"></Butterfly>
        </transition>
      </section>
      <MainContent />
    </div>
    <Writing />
  </main>
</template>

<script>
import Butterfly from "./origami/Butterfly.vue";
import MainContent from "./MainContent.vue";
import Writing from "./Writing.vue";

export default {
  components: {
    Butterfly,
    MainContent,
    Writing
  },
  mounted() {
    this.showButterfly = true;
  },
  data() {
    return {
      showButterfly: false
    };
  }
};
</script>

<style lang="scss">
@mixin fly($xaxis: 0, $yaxis: 0) {
  transform: translate3d($xaxis, $yaxis, 0);
}

@mixin flap($deg: 0) {
  transform: rotate3d(1, 1, 0, $deg);
}

@keyframes flyin {
  0% {
    @include fly(50vw, 45vh);
  }
}

@keyframes flyout {
  100% {
    @include fly(100vw, 100vh);
  }
}

@keyframes flap {
  50% {
    @include flap(45deg);
  }
}

@keyframes flap-small {
  50% {
    @include flap(30deg);
  }
}

.fly-in {
  animation: flyin 3s ease-out both;
}

.fly-out {
  animation: flyout 5s ease-in both;
}

.fly-in,
.fly-out {
  .left-wing,
  .right-wing {
    animation: flap 0.5s ease-in infinite;
  }

  .left-back-wing,
  .right-back-wing {
    animation: flap-small 0.5s ease-in infinite;
  }
}
</style>

