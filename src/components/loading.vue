<template>
  <div class="loading" v-show="activeLoading">
    <div class="boxLoading"></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    props: {
      activeLoading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style type="text/css" lang="scss">
.loading {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
  transition: all 2s 2s ease;
}
.boxLoading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  margin: auto;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 59px;
    width: 50px;
    height: 5px;
    opacity: 0.1;
    background: #000;
    border-radius: 50%;
    animation: shadow .5s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    background: #1A6844;
    animation: animate .5s linear infinite;
  }
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
