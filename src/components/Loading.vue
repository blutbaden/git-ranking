<template>
  <div class="loading-eclipse"><div></div><div></div><div></div><div></div></div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.loading-eclipse {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.loading-eclipse div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #ddd;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loading-eclipse div:nth-child(1) {
  left: 6px;
  animation: loading-eclipse1 0.6s infinite;
}
.loading-eclipse div:nth-child(2) {
  left: 6px;
  animation: loading-eclipse2 0.6s infinite;
}
.loading-eclipse div:nth-child(3) {
  left: 26px;
  animation: loading-eclipse2 0.6s infinite;
}
.loading-eclipse div:nth-child(4) {
  left: 45px;
  animation: loading-eclipse3 0.6s infinite;
}
@keyframes loading-eclipse1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loading-eclipse3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loading-eclipse2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
