<template lang="html">
  <main class="o-main">
    <div class="o-grid-6-columns">
      <div class="o-span-6 o-span-3-med o-span-2-lg o-content">
        <transition name="butterfly-move"
                    enter-active-class="fly-in"
                    leave-active-class="fly-out">
          <Butterfly v-if="showButterfly"></Butterfly>
        </transition>
      </div>
      <div class="o-span-6 o-span-3-med o-span-4-lg o-content">
        <nav class="o-nav">
          <ul>
            <li>
              <a href="#writing">Writing</a>
            </li>
            <li>
              <a href="#speaking">Speaking</a>
            </li>
          </ul>
        </nav>
        <MainContent />
      </div>
    </div>
    <div class="o-content">
      <Writing />
    </div>
    <div class="o-content--right">
      <Speaking />
    </div>
  </main>
</template>

<script>
import Butterfly from "./origami/Butterfly.vue";
import MainContent from "./MainContent.vue";
import Writing from "./Writing.vue";
import Speaking from "./Speaking.vue";

export default {
  components: {
    Butterfly,
    MainContent,
    Writing,
    Speaking
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

